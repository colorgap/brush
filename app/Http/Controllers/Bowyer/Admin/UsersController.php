<?php 

namespace App\Http\Controllers\Bowyer\Admin;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin\User;
use App\Http\Controllers\ApiController;
use App\DataObjects\Common\Notification;
use Illuminate\Http\Request;

class UsersController extends ApiController {
    public function index() {
        $user = User::all();
        return $this->respondWithCORS($user);
    }
    public function addUser(Request $request) {
        if ($request->input("username") != "" && $request->input("email") != "" && $request->input("password") != "") {
            $user = User::where('email', $request->input("email"))->orWhere('username', $request->input("username"))->first();
            if (empty($user)) {
                $user = new User();
                $user->username = $request->username;
                $user->email = $request->email;
                $user->password = hash('sha1', $request->password);
                $user->save();
                return $this->respondWithCORS($user);
            } else {
                $error = new Notification();
                $error->notify("User already exist, please try different username and email.", 5100);
                return $this->respondWithCORS($error);
            }
        } else {
            $error = new Notification();
            $error->notify("Username, email and password are mandatory.", 5101);
            return $this->respondWithCORS($error);
        }
    }
}