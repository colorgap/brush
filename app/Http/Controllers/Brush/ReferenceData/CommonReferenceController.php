<?php 

namespace App\Http\Controllers\Brush\ReferenceData;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\Brush\Admin\RolesController;
use Illuminate\Http\Request;
/**
* Common Reference Data
*/
class CommonReferenceController extends ApiController {
    /**
    * getRoles just forwards the call to RolesController and get all the roles available.
    * @return Roles
    */
    public function getRoles() {
        $rolesCtrl = new RolesController();
        return $rolesCtrl->getRoles();
    }
}