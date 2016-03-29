<?php

namespace App\Http\Controllers\Bowyer\HealthCheck;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\User;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

class DatabaseCheckController extends ApiController{
    public function index(){
         $user = Auth::user();
        return $this->respondWithCORS($user);
    }
}
