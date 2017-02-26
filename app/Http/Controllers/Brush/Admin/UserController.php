<?php 

namespace App\Http\Controllers\Brush\Admin;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\User;
use App\Models\Admin\Roles;
use App\Http\Controllers\ApiController;
use App\DataObjects\Common\Notification;
use Illuminate\Http\Request;
/**
* User updates
*/
class UserController extends ApiController {
    /**
    * Returns all except the admin
    * @return User
    */
    public function index() {
        $users = User::where('username','!=','admin')->get();
        foreach ($users as $user) {
            $user->role_desc = Roles::where('role_id',$user->role)->first()->role_desc;
        }
        return $this->respondWithCORS($users);
    }
    /**
    * Validate and add user
    * @param Request
    * @return User
    */
    public function addUser(Request $request) {
        $this->validate($request, [
            'username' => 'required', 
            'password' => 'required',
            'email' => 'required|email'
        ]);
        $user = User::where('email', $request->input("email"))->orWhere('username', $request->input("username"))->first();      
        if (empty($user)) {
            $user = new User();
            $user->name = $request->input("name",'');
            $user->username = $request->input("username");
            $user->email = $request->input("email");
            $user->role = $request->input("role",2);
            $user->password = hash('sha1', $request->input("password"));
            $user->save();
            $userNew = User::where('username',$user->username)->first();
            $userNew->role_desc = Roles::where('role_id',$userNew->role)->first()->role_desc;
            return $this->respondWithCORS($userNew);
        } else {
            $error = new Notification();
            $error->notify("User already exist, please try different username and email.", 5100);
            return $this->respondWithCORS($error);
        }
    }
    /**
    * Validate and update user
    * @param Request
    * @return User
    */
    public function updateUser(Request $request) {
        $this->validate($request, [
            'username' => 'required', 
            'email' => 'required|email',
            'role' => 'required'
        ]);
        $loggedInuser = Auth::user();
        $user = User::where('username', $request->input("username"))->first();
        $userEmailCheck = User::where("email",$request->input("email"))->first();
        if(!empty($user) && (empty($userEmailCheck) || (!empty($userEmailCheck) && $user->user_id == $userEmailCheck->user_id))){
            $user->name = $request->input("name");
            $user->username = $request->input("username");
            $user->email = $request->input("email");
            $user->role = $request->input("role");
            $user->updated_by = $loggedInuser->user_id;
            $user->save();
            $userNew = User::where('username',$user->username)->first();
            $userNew->role_desc = Roles::where('role_id',$userNew->role)->first()->role_desc;
            return $this->respondWithCORS($userNew);
        }else if (!empty($user) && $user->user_id != $userEmailCheck->user_id){
            $error = new Notification();
            $error->notify("Email already in use. Please provide different email.", 5301);
            return $this->respondWithCORS($error);
        }else{
            $error = new Notification();
            $error->notify("User not found.", 5301);
            return $this->respondWithCORS($error);
        }
    }
    /**
    * Delete the user by user_id
    * @param User
    * @return Notification
    */
    public function deleteUser($user_id){
        $user = User::where('user_id', $user_id)->first();
        if(!empty($user)){
            $user->delete();
            $success = new Notification();
            $success->notify("User deleted.", 5102,"success");
            return $this->respondWithCORS($success);
        }else{
            $error = new Notification();
            $error->notify("User not found.", 5103);
            return $this->respondWithCORS($error);
        }
    }
}