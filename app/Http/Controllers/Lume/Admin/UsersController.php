<?php

namespace App\Http\Controllers\Lume\Admin;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\Users;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

class UsersController extends ApiController{
    public function index(){ 
        $user = Users::all();
        return $this->respondWithCORS($user);
    }
}
