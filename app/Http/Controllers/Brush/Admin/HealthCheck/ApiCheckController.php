<?php

namespace App\Http\Controllers\Brush\Admin\HealthCheck;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;

/**
* API Health Check 
*/
class ApiCheckController extends ApiController{
    /**
    * Checks the health of the system by making simple call
    * @param Request
    * @param Request
    */
    public function index(Request $request){
        return $this->respondWithCORS($request);
    }
}
