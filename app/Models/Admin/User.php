<?php
namespace App\Models\Admin;
use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
class User extends Model implements
    AuthenticatableContract,
    AuthorizableContract{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    use Authenticatable, Authorizable;
    protected $table = 'user';
    protected $primaryKey = 'user_id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 'name','username', 'email', 'password','role','api_token','created_by','updated_by'];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password'];
}
