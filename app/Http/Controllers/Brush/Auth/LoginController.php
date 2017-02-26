<?php

namespace App\Http\Controllers\Brush\Auth;

use App\Models\Auth\Login;
use App\Models\Admin\User;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use App\DataObjects\Common\Notification;
use App\DataObjects\Common\Salt;
use Illuminate\Support\Facades\Auth;
/**
* Login validation and api token creation
*/
class LoginController extends ApiController{
    public function __construct()
    {
        //
    }
    /**
    * index method accepts request, validate for required fields.
    * if username and password exist then forward to *validateLogin* to validate login from database
    * else return error message.
    * @param Request
    * @return Notification
    */
    public function index(Request $request){
        $this->validate($request, [
            'username' => 'required', 
            'password' => 'required'
        ]);
        $validatedReturn = $this->validateLogin($request);
        return $this->respondWithCORS($validatedReturn);
    }
    /**
    * validateLogin validates the username/email and password from database.
    * @param Request
    * @return Notification
    */
    public function validateLogin(Request $request){
        $emailLogin = ['email' => $request->input("username"), 'password' => hash('sha1', $request->input("password"))];
        $usernameLogin = ['username' => $request->input("username"), 'password' => hash('sha1', $request->input("password"))];
        $user = User::where($emailLogin)->orWhere($usernameLogin)->first();
        if(!empty($user)){
            $salt = new Salt();
            $user->api_token = hash('sha1',$salt->spiceItUp($user->email));
            $user->save();
            return $user;
        }else{
            $error = new Notification();
            $error->notify("Provided Username and Password doesn't match. Please try again.",5000);
            return $error;
        }
    }
    /**
    * logout method gets user details from the Auth::user and removes api token from db and send back notification. 
    * @return Notification
    */
    public function logout(){
        $user = Auth::user();
        if(!empty($user)){
            $user->api_token = null;
            $user->save();
        }
        $notice = new Notification();
        $notice->notify("Logged Out",1000,"warning");
        return $this->respondWithCORS($notice);
    }
}
