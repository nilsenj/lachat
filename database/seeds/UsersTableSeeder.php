<?php

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
    if (\Storage::disk('public')->exists('avatars')) {
      \File::deleteDirectory(\Storage::disk('public')->path('avatars'));
      \File::makeDirectory(\Storage::disk('public')->path('avatars'));
    }
    
    $user = \App\User::UpdateOrCreate([
      'name' => 'badCoder',
      'email' => 'nikoleivan@gmail.com',
      'password' => '123456'
    ]);

    factory(\App\User::class, 20)->create();
  }
}
