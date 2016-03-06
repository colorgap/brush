<?php

namespace App\Http\Controllers\Bowyer\Auth;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use App\Http\Controllers\Bowyer\Admin\UsersController;

class RegisterController extends ApiController{
    public function index(Request $request){
        $userCtrl = new UsersController();
        return $userCtrl->addUser($request);
    }
}
