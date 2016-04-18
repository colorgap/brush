<?php 

namespace App\Http\Controllers\Bowyer\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\User;
use App\Models\Admin\Roles;
use App\Http\Controllers\ApiController;
use App\DataObjects\Common\Notification;
use Illuminate\Http\Request;
/**
* Profile updates and Logged in User details
*/
class ProfileController extends ApiController {
    /**
    * index method gets logged in user from Auth:user and returns a json object.
    * @param void
    * @return loggedInUser
    */
    public function index() {
        $loggedInuser = Auth::user();
        $user = User::where("user_id",$loggedInuser->user_id)->first();
        return $this->respondWithCORS($user);
    }
    
    /**
    * updatesProfile method accepts user details from the request and checks if user exist in database. 
    * If user exist then sends back success notification.
    * else returns error notification.
    * 
    * @param $request
    * @return Notification
    */
    public function updateProfile(Request $request){
        $this->validate($request, [
            'name' => 'required', 
            'email' => 'required|email',
            'role' => 'required'
        ]);
        $loggedInuser = Auth::user();
        $user = User::where("user_id",$request->input("user_id"))->first();
        $userEmailCheck = User::where("email",$request->input("email"))->first();
        if(!empty($user) && (empty($userEmailCheck) || (!empty($userEmailCheck) && $user->user_id == $userEmailCheck->user_id))){
            $user->name = $request->input("name");
            $user->email = $request->input("email");
            $user->role = $request->input("role");
            $user->updated_by = $loggedInuser->user_id;
            $user->update();
            $success = new Notification();
            $success->notify("Profile updated successfully.", 5300,"success");
            return $this->respondWithCORS($success);
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
}