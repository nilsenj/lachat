<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('profiles', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('user_id')->unsigned();
      $table->foreign('user_id')
        ->references('id')
        ->on('users')
        ->onUpdate('cascade')
        ->onDelete('cascade');
      $table->longText('description')->nullable();
      $table->unsignedInteger('trend1')->nullable();
      $table->unsignedInteger('trend2')->nullable();
      $table->unsignedInteger('trend3')->nullable();
      $table->foreign('trend1')
        ->references('id')
        ->on('trends')
        ->onUpdate('cascade')
        ->onDelete('cascade');
      $table->foreign('trend2')
        ->references('id')
        ->on('trends')
        ->onUpdate('cascade')
        ->onDelete('cascade');
      $table->foreign('trend3')
        ->references('id')
        ->on('trends')
        ->onUpdate('cascade')
        ->onDelete('cascade');
      $table->longText('links')->nullable();
      $table->decimal('experience', 3, 1)->nullable();
      $table->text('position')->nullable();
      $table->decimal('hour_rate')->nullable();
      $table->integer('client_amount')->default(0);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('profiles');
  }
}
