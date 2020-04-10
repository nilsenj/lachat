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
    $user->attachRole(1);
    $fake = Faker\Factory::create();
    $user->profile()->update([
      'user_id' => $user->id,
      'position' => \App\Models\Trends::find($fake->numberBetween(1, \App\Models\Trends::count()))->name,
      'trend1' => \App\Models\Trends::find($fake->numberBetween(1, \App\Models\Trends::count()))->id,
      'trend2' => \App\Models\Trends::find($fake->numberBetween(1, \App\Models\Trends::count()))->id,
      'trend3' => \App\Models\Trends::find($fake->numberBetween(1, \App\Models\Trends::count()))->id,
      'description' => str_limit(implode($fake->sentences(20)), 1000),
      'links' => json_encode(['website' => $fake->url, 'workprofile' => 'https://www.linkedin.com/in/ivan-nikolenko-913096a9']),
      'experience' => $fake->numberBetween(1, 45),
      'hour_rate' => $fake->numberBetween(100, 1000),
      'client_amount' => $fake->numberBetween(1, 1000)
    ]);

    $faker = Faker\Factory::create();
    factory(\App\User::class, 20)->create()->each(function (\App\User $u) use ($faker) {
      $role = $faker->numberBetween(2, 3);
      $u->attachRole($role);
      if ($role === 3) {
        $u->profile()->updateOrCreate([
          'position' => \App\Models\Trends::find($faker->numberBetween(1, \App\Models\Trends::count()))->name,
          'trend1' => \App\Models\Trends::find($faker->numberBetween(1, \App\Models\Trends::count()))->id,
          'trend2' => \App\Models\Trends::find($faker->numberBetween(1, \App\Models\Trends::count()))->id,
          'trend3' => \App\Models\Trends::find($faker->numberBetween(1, \App\Models\Trends::count()))->id,
          'description' => str_limit(implode($faker->sentences(20)), 1000),
          'links' => "{website: '".$faker->url."', workprofile: 'https://www.linkedin.com/in/ivan-nikolenko-913096a9'}",
          'experience' => $faker->numberBetween(1, 45),
          'client_amount' => $faker->numberBetween(1, 1000)
        ]);
      }
    });
  }
}
