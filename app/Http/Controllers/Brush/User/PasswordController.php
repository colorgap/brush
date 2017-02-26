<?php 

namespace App\Http\Controllers\Brush\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\User;
use App\Http\Controllers\ApiController;
use App\DataObjects\Common\Notification;
use App\DataObjects\Common\Salt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
/**
* Password updates
*/
class PasswordController extends ApiController {
    /**
    * Validate and allow user to update the password
    * @param Request
    * @return Notification
    */
    public function index(Request $request) {
        $this->validate($request, [
            'password' => 'required', 
            'newPassword' => 'required'
        ]);
        $loggedInUser = Auth::user();
        $user = User::where('email',$loggedInUser->email)
                ->Where('password',hash('sha1', $request->input("password")))->first();
        if(!empty($user)){
            $user->password = hash('sha1', $request->input("newPassword"));
            $user->update();
            $success = new Notification();
            $success->notify("Password updated successfully.", 5200,"success");
            return $this->respondWithCORS($success);
        }else{
            $error = new Notification();
            $error->notify("Current Password is not correct.", 5200);
            return $this->respondWithCORS($error);
        }
    }
    /**
    * Validate and Send email to user
    * @param Request
    * @return Notification
    */
    public function forgotPassword(Request $request){
        $this->validate($request, [
            'username' => 'required'
        ]);
        $user = User::where('email',$request->input("username"))->orWhere('username',$request->input("username"))->first();
        if(!empty($user)){
            // @todo email implementation goes here
            $salt = new Salt();
            $user->api_token = hash('sha1', $salt->spiceItUp($user->email));
            $user->update();
            // Send the below link in email
            //Mail::to($user->email)->send('/dashboard#/resetForgotPassword/'.$user->api_token);
            $success = new Notification();
            $success->notify("We have sent an email to your registered email. Please follow the steps to reset your password.", 5200,"success");
            return $this->respondWithCORS($success);
        }else{
            $error = new Notification();
            $error->notify("User not found.", 5200);
            return $this->respondWithCORS($error);
        }
    }

    public function resetPassword(Request $request){
        $this->validate($request, [
            'token' => 'required',
            'password'=> 'required'
        ]);
        $user = User::where('api_token',$request->input("token"))->first();
        if(!empty($user)){
            // @todo email implementation goes here
            $user->password = hash('sha1', $request->input("password"));
            $user->update();
            $success = new Notification();
            $success->notify("Your password has been reset. Please login.", 5200,"success");
            return $this->respondWithCORS($success);
        }else{
            $error = new Notification();
            $error->notify("User not found or you have already used your token.", 5200);
            return $this->respondWithCORS($error);
        }
    }
}