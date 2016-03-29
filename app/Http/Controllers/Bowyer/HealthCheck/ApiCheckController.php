<?php

namespace App\Http\Controllers\Bowyer\HealthCheck;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

class ApiCheckController extends ApiController{
    public function index(Request $request){
        return $this->respondWithCORS($request);
    }
}
