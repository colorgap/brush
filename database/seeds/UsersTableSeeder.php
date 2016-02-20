<?php
use App\Models\Admin\Users;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Users::create([
            'name'=>'Admin',
            'email'=>'admin@colorgap.com',
            'role'=>1,
            'password'=>hash('sha1', 'admin'),
            'created_by'=>1,
            'updated_by'=>1
        ]);
        Users::create([
            'name'=>'User',
            'email'=>'user@colorgap.com',
            'role'=>2,
            'password'=>hash('sha1', 'user'),
            'created_by'=>1,
            'updated_by'=>1
        ]);
    }
}
