<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as AuthAdmin;
use Illuminate\Support\Facades\Auth;

class AuthenticateAdmin
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $authAdmin;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(AuthAdmin $authAdmin)
    {
        $this->authAdmin = $authAdmin;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $loggedInuser = Auth::user();
        if ($loggedInuser->role!=1) {
            return response('Unauthorized.', 401);
        }
        return $next($request);
    }
}
