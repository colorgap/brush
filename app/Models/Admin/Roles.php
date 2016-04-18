<?php
namespace App\Models\Admin;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
class Roles extends Model{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'roles';
    protected $casts = [
        'role_id' => 'integer',
        'created_by' => 'integer',
        'updated_by' => 'integer'
    ];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['role_desc', 'is_valid', 'created_by','updated_by'];
}
