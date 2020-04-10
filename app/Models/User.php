<?php

namespace App;

use App\Models\Profile;
use App\Models\Story;
use App\Models\Thread;
use App\Traits\Messagable;
use Carbon\Carbon;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Authenticatable
{
  use Notifiable;
  use Messagable;
  use EntrustUserTrait; // add this trait to your user model

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
    self::createUserAvatar();
  }

  private static function createUserAvatar()
  {
    User::created(function ($user) {
      $folder = 'avatars/' . $user->id;
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
   * @return \Illuminate\Database\Eloquent\Relations\HasOne
   */
  public function profile()
  {
    return $this->hasOne(Profile::class, 'user_id');
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function stories()
  {
    return $this->hasMany(Story::class, 'user_id');
  }

}
