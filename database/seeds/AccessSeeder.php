<?php

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class AccessSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    if (!Role::find(1)) {
      Role::create([
        'name' => 'Admin',
        'display_name' => 'admin',
        'description' => '', // optional
      ]);

      Role::create([
        'name' => 'Customer',
        'display_name' => 'customer',
        'description' => '', // optional
      ]);
      Role::create([
        'name' => 'Doctor',
        'display_name' => 'doctor',
        'description' => '', // optional
      ]);
    }

    if (!Permission::find(1)) {
      $permissionsAdmin = [
        'All of the above',
        'Delete Users',
        'Manage AdminPanel',
        'Manage Users',
        'Cure Customers',
        'Can Add',
        'Can Edit',
        'Can Delete',
        'Can Update',
        'Select Doctors',
        'Delete Doctors',
        'Delete Customers',
      ];
      foreach ($permissionsAdmin as $permission) {
        $perm = Permission::updateOrCreate([
          'name' => $permission,
          'display_name' => $permission,
          'description' => $permission,
        ]);
        $roleSAdmin = Role::find(1);

        $roleSAdmin->attachPermission($perm);
      }
      $roleClient = Role::find(2);
      $roleClient->attachPermission(Permission::find(10));
      $roleClient = Role::find(3);
      $roleClient->attachPermission(Permission::find(5));
    }
  }
}
