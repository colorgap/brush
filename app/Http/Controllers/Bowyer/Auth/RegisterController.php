<?php

namespace App\Http\Controllers\Bowyer\Auth;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use App\Http\Controllers\Bowyer\Admin\UserController;
/**
* User registration
*/
class RegisterController extends ApiController{
    /**
    * User registration is handled by this system by just passing the call to UserController
    * @param Request
    */
    public function index(Request $request){
        $userCtrl = new UserController();
        return $userCtrl->addUser($request);
    }
}
