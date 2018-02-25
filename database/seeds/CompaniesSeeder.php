<?php

use Illuminate\Database\Seeder;

class CompaniesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $faker = Faker\Factory::create();

    \App\Models\Company::create([
      'name' => 'general',
      'creator_id' => 1
    ]);
    factory(\App\Models\Company::class, 20)->create()
      ->each(function (\App\Models\Company $p) use ($faker) {
      });
  }
}
