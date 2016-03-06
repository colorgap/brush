<?php

namespace App\Http\Controllers\Bowyer\Admin;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\User;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

class UsersController extends ApiController{
    public function index(){
        $user = User::all();
        return $this->respondWithCORS($user);
    }
    public function addUser(Request $request){
        $user = new User();
        $user->email = $request->username;
        $user->password = hash('sha1',$request->password);
        $user->save();
        return $this->respondWithCORS($user);
    }
}
