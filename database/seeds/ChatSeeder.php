<?php

use Illuminate\Database\Seeder;

class ChatSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $faker = Faker\Factory::create();

    factory(\App\Models\Thread::class, 600)->create()
      ->each(function (\App\Models\Thread $p) use ($faker) {
        $author_id = $p->author_id;
        $user_id = $faker->numberBetween(1,21);
        $message = $p->messages()->create([
          'user_id' => $user_id,
          'body' => implode(' ', $faker->sentences(2)),
        ]);

        $receiver = \App\Models\Participant::create(
          [
            'thread_id' => $p->id,
            'user_id' => $user_id,
            'last_read' => new \Carbon\Carbon()
          ]
        );

        $sender = \App\Models\Participant::create(
          [
            'thread_id' => $p->id,
            'user_id' => $author_id,
            'last_read' => new \Carbon\Carbon()
          ]
        );
      });
  }
}
