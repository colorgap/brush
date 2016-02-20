<?php
namespace App\Models\Admin;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
class Users extends Model{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password','role','created_by','updated_by'];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password','remember_token'];
}
