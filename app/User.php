<?php

namespace App;

use App\Models\Company;
use App\Models\Participant;
use App\Models\Thread;
use App\Traits\Messagable;
use Carbon\Carbon;
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
    'name', 'email', 'password', 'avatar'
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

  protected static function boot()
  {
    parent::boot(); // TODO: Change the autogenerated stub

    User::creating(function ($user) {
      $folder = 'avatars/' . Carbon::now()->format('DD-MM-YYY');
      $time = time();
      if (!\Storage::disk('public')->exists($folder)) {
        if (!\Storage::disk('public')->exists('avatars')) {
          \File::makeDirectory(\Storage::disk('public')->path('avatars'));
        }
        \File::makeDirectory(\Storage::disk('public')->path($folder));
      }
      \Avatar::create($user->name)->save(\Storage::disk('public')->path($folder) . '/' . $user->email . '-' . $time . '.jpg', 100);
      $user->avatar = '/storage/public/' . $folder . '/' . $user->email . '-' . $time . '.jpg';

    });
  }

  /**
   * set default user avatar by name
   *
   * @param $value
   */
  public function getAvatarAttribute()
  {
    return url($this->attributes['avatar']);
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function authorUser()
  {
    return $this->hasMany(Thread::class, 'author_id');
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
   */
  public function companies()
  {
    $companyIds = $this->threads()->pluck('company_id');


    return Company::whereIn('id', $companyIds->unique());
  }
}
