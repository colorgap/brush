<?php

namespace App\Http\Controllers\Bowyer\Admin\HealthCheck;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\User;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
/**
* Database Health Check 
*/
class DatabaseCheckController extends ApiController{
    /**
    * Checks the health of the system by making simple call as Auth will make a call to database from authentication
    */
    public function index(){
         $user = Auth::user();
        return $this->respondWithCORS($user);
    }
}
