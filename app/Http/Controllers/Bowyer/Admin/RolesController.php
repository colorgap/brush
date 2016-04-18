<?php 

namespace App\Http\Controllers\Bowyer\Admin;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\Roles;
use App\Http\Controllers\ApiController;
use App\DataObjects\Common\Notification;
use Illuminate\Http\Request;
/**
* Roles 
*/
class RolesController extends ApiController {
    /**
    * Get all the roles available in the system
    * @return Roles
    */
    public function getRoles() {
        $roles = Roles::all();
        return $this->respondWithCORS($roles);
    }
}