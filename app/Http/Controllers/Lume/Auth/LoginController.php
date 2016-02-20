<?php

namespace App\Http\Controllers\Lume\Auth;

use App\Models\Auth\Login;
use App\Models\Admin\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class LoginController extends Controller{


    public function index(Request $request){
        $login = json_decode($request->all());

        return response()->json($login->username)->header('Content-type','application/json');

    }
    public function logout(){

        $user = new Users();
        $user->email = "admin@colorgap.com";

        return response()->json($user)->header('Content-type','application/json');

    }

}
