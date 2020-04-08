<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trends extends Model
{
  use \Awobaz\Compoships\Compoships;

  protected $fillable = [
    'name'
  ];

  protected function profiles()
  {
    return $this->hasMany(Profile::class, ['id', 'id', 'id'], ['trend1', 'trend2', 'trend3']);
  }
}
