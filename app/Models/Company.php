<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Company extends Model
{
  use SoftDeletes;

  protected $table = 'companies';
  protected $fillable = [
    'name', 'creator_id'
  ];
  /**
   * The attributes that should be mutated to dates.
   *
   * @var array
   */
  protected $dates = ['deleted_at'];

  /**
   * User's relationship.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
   *
   * @codeCoverageIgnore
   */
  public function creator()
  {
    return $this->belongsTo(User::class, 'creator_id', 'id');
  }

  /**
   * User's relationship.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
   *
   * @codeCoverageIgnore
   */
  public function threads()
  {
    return $this->hasMany(Thread::class, 'company_id', 'id');
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
   */
  public function participants()
  {
    return $this->hasManyThrough(Participant::class, Thread::class, 'company_id', 'thread_id');
  }
}
