<?php

namespace App\Http\Controllers\Bowyer\Auth;

use App\Models\Auth\Login;
use App\Models\Admin\User;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use App\DataObjects\Common\Notification;
use App\DataObjects\Common\Salt;
use Illuminate\Support\Facades\Auth;

class LoginController extends ApiController{
    
    public function index(Request $request){
            $validatedReturn = $this->validateLogin($request);
            return $this->respondWithCORS($validatedReturn);
    }
    public function validateLogin(Request $request){
        if($request->input("username")!="" && $request->input("password")!=""){
            $user = User::where('email',$request->input("username"))
                ->Where('password',hash('sha1', $request->input("password")))->first();
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
        }else{
            $error = new Notification();
            $error->notify("Please provide Username and Password",5000);
            return $error;
        }
    }
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
