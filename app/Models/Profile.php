<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
  use \Awobaz\Compoships\Compoships;
  protected $fillable = [
    'user_id',
    'trend1',
    'trend2',
    'trend3',
    'links',
    'file',
    'experience',
    'hour_rate',
    'client_amount'
  ];

  protected $casts = [
    'links' => 'array',
  ];

  /**
   * User relationship.
   *
   * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
   *
   * @codeCoverageIgnore
   */
  public function user()
  {
    return $this->belongsTo(User::class, 'user_id');
  }

  /**
   * @return \Awobaz\Compoships\Database\Eloquent\Relations\HasOne
   */
  public function trend1()
  {
    return $this->hasOne(Trends::class, 'id','trend1');
  }

  /**
   * @return \Awobaz\Compoships\Database\Eloquent\Relations\HasOne
   */
  public function trend2()
  {
    return $this->hasOne(Trends::class, 'id', 'trend2');
  }

  /**
   * @return \Awobaz\Compoships\Database\Eloquent\Relations\HasOne
   */
  public function trend3()
  {
    return $this->hasOne(Trends::class, 'id','trend3');
  }

  public function selectedTrends() {
    return collect([$this->trend1()->first(), $this->trend2()->first(), $this->trend3()->first()]);
  }
}
