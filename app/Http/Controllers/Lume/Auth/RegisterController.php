<?php

namespace App\Http\Controllers\Lume\Auth;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\Users;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use App\Http\Controllers\Lume\Admin\UsersController;

class RegisterController extends ApiController{
    public function index(Request $request){
        $userCtrl = new UsersController();
        return $userCtrl->addUser($request);
    }
}
