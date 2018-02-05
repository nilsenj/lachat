<?php

namespace App;

use App\Models\Thread;
use App\Traits\Messagable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
  use Notifiable;
  use Messagable;
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 'email', 'password',
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    'password', 'remember_token',
  ];

  /**
   * Hash the users password
   *
   * @param $value
   */
  public function setPasswordAttribute($value)
  {
    $this->attributes['password'] = \Hash::make($value);
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function authorUser()
  {
    return $this->hasMany(Thread::class, 'author_id');
  }
}
