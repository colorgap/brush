<?php 

namespace App\Http\Controllers\Bowyer\Admin;
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
            'name' => 'required',
            'email' => 'required|email',
            'role' => 'required'
        ]);
        $user = User::where('username', $request->input("username"))->first();
        $user->name = $request->input("name");
        $user->username = $request->input("username");
        $user->email = $request->input("email");
        $user->role = $request->input("role");
        $user->save();
        $userNew = User::where('username',$user->username)->first();
        $userNew->role_desc = Roles::where('role_id',$userNew->role)->first()->role_desc;
        return $this->respondWithCORS($userNew);
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