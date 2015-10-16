<?php
 
namespace App\Http\Controllers\Lume\Admin;
 
use App\Models\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
 
 
class UsersController extends Controller{
 
 
    public function index(){

        $user = new Users();
        $user->email = "admin@colorgap.com";
 
        return response()->json($user)->header('Content-type','application/json');
 
    }
 
}