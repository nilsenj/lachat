<?php

use App\Models\Models;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThreadsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create(Models::table('threads'), function (Blueprint $table) {
      $table->increments('id');
      $table->integer('company_id')->unsigned();
      $table->foreign('company_id')
        ->references('id')
        ->on('users')
        ->onUpdate('cascade')
        ->onDelete('cascade');

      $table->integer('author_id')->unsigned();
      $table->foreign('author_id')
        ->references('id')
        ->on('users')
        ->onUpdate('cascade')
        ->onDelete('cascade');
      $table->string('subject')->default('');
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
    Schema::dropIfExists(Models::table('threads'), function (Blueprint $table) {
      $table->dropSoftDeletes();
    });
  }
}
