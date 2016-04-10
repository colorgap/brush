<?php 

namespace App\Http\Controllers\Bowyer\Admin;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\User;
use App\Models\Admin\Roles;
use App\Http\Controllers\ApiController;
use App\DataObjects\Common\Notification;
use Illuminate\Http\Request;

class ProfileController extends ApiController {
    public function index() {
        $user = Auth::user();
        return $this->respondWithCORS($user);
    }
}