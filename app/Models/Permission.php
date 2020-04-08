<?php

namespace App\Models;

use Zizaco\Entrust\EntrustPermission;

/**
 * Class Permission
 * @package App\Core\Models
 */
class Permission extends EntrustPermission
{
    /**
     * bootable methods fix.
     */
    public static function boot()
    {
        parent::boot();
    }
}
