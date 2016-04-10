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
        $loggedInuser = Auth::user();
        $user = User::where("user_id",$loggedInuser->user_id)->first();
        return $this->respondWithCORS($user);
    }
    public function saveProfile(Request $request){
        $loggedInuser = Auth::user();
        $user = User::where("user_id",$request->input("user_id"))->first();
        if(!empty($user)){
            $user->name = $request->input("name");
            $user->email = $request->input("email");
            $user->role = $request->input("role");
            $user->updated_by = $loggedInuser->user_id;
            $user->update();
            $error = new Notification();
            $error->notify("Profile updated successfully.", 5300,"success");
            return $this->respondWithCORS($error);
        }else{
            $error = new Notification();
            $error->notify("User not found.", 5301);
            return $this->respondWithCORS($error);
        }
    }
}