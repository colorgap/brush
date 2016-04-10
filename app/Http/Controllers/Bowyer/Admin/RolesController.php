<?php 

namespace App\Http\Controllers\Bowyer\Admin;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\Roles;
use App\Http\Controllers\ApiController;
use App\DataObjects\Common\Notification;
use Illuminate\Http\Request;

class RolesController extends ApiController {
    public function index() {
        $roles = Roles::all();
        return $this->respondWithCORS($roles);
    }
}