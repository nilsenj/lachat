<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Message;
use App\Models\Models;
use App\Models\Participant;
use App\Models\Thread;

class ChatServiceProvider extends ServiceProvider
{
  /**
   * Bootstrap the application services.
   *
   * @return void
   */
  public function boot()
  {
    $this->setMessengerModels();
    $this->setUserModel();
  }

  /**
   * Register the application services.
   *
   * @return void
   */
  public function register()
  {
  }

  protected function setMessengerModels()
  {
    $config = $this->app->make('config');

    Models::setMessageModel($config->get('messenger.message_model', Message::class));
    Models::setThreadModel($config->get('messenger.thread_model', Thread::class));
    Models::setParticipantModel($config->get('messenger.participant_model', Participant::class));

    Models::setTables([
      'messages' => $config->get('messenger.messages_table', Models::message()->getTable()),
      'participants' => $config->get('messenger.participants_table', Models::participant()->getTable()),
      'threads' => $config->get('messenger.threads_table', Models::thread()->getTable()),
    ]);
  }

  protected function setUserModel()
  {
    $config = $this->app->make('config');

    $model = $config->get('auth.providers.users.model', function () use ($config) {
      return $config->get('auth.model', $config->get('messenger.user_model'));
    });

    Models::setUserModel($model);

    Models::setTables([
      'users' => (new $model)->getTable(),
    ]);
  }
}
