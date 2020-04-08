<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
  protected $fillable = [
    'user_id',
    'description',
    'file'
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
}
