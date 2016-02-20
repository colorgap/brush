<?php

namespace App\Http\Controllers\Lume\Admin;

use App\Models\Admin\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller{
    public function index(){
        $user = Users::all();
        return response()->json($user)->header('Content-type','application/json');
    }
}
