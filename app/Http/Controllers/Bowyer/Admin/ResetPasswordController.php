<?php 

namespace App\Http\Controllers\Bowyer\Admin;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\Roles;
use App\Models\Admin\User;
use App\Http\Controllers\ApiController;
use App\DataObjects\Common\Notification;
use Illuminate\Http\Request;

class ResetPasswordController extends ApiController {
    public function index(Request $request) {
        $loggedInUser = Auth::user();
        $user = User::where('email',$loggedInUser->email)
                ->Where('password',hash('sha1', $request->input("password")))->first();
        if(!empty($user)){
            $user->password = hash('sha1', $request->input("newPassword"));
            $user->update();
            $error = new Notification();
            $error->notify("Password updated successfully.", 5200,"success");
            return $this->respondWithCORS($error);
        }else{
            $error = new Notification();
            $error->notify("Current Password is not correct.", 5200);
            return $this->respondWithCORS($error);
        }
    }
}