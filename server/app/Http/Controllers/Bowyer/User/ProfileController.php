<?php 

namespace App\Http\Controllers\Bowyer\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\User;
use App\Models\Admin\Roles;
use App\Http\Controllers\ApiController;
use App\DataObjects\Common\Notification;
use App\Http\Controllers\Bowyer\Admin\UserController;
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
        $userCtrl = new UserController();
        return $userCtrl->updateUser($request);
    }
}