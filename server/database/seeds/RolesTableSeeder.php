<?php
use App\Models\Admin\Roles;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         Roles::create([
            'role_desc'=>'Admin',
            'is_valid'=> true,
            'created_by'=>1,
            'updated_by'=>1
         ]);
         Roles::create([
            'role_desc'=>'Regular User',
            'is_valid'=> true,
            'created_by'=>1,
            'updated_by'=>1
         ]);
    }
}
