<?php

use App\Models\Models;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParticipantsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create(Models::table('participants'), function (Blueprint $table) {
      $table->increments('id');
      $table->integer('thread_id')->unsigned();
      $table->integer('user_id')->unsigned();
      $table->timestamp('last_read')->nullable();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table(Models::table('participants'), function (Blueprint $table) {
      $table->dropSoftDeletes();
    });
    Schema::dropIfExists(Models::table('participants'));
  }
}