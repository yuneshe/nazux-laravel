<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory()->create([
        //     'name' => 'Administrator',
        //     'email' => 'admin@example.com',
        // ]);
  
        // User::factory()->create([
        //     'name' => 'Yuneshe Anselme Tayum',
        //     'email' => 'anslemo@comain.com',
        // ]);
        // User::factory()->create([
        //     'name' => 'Afongang Ernest Tayum',
        //     'email' => 'enerstly@comain.com',
        // ]);
        // User::factory(10)->create();

        // $adminRole = Role::create(['name' => 'admin']);
        // $technicianRole = Role::create(['name' => 'technician']);
        // $permission = Permission::create(['name' => 'work-oders']); 
        // $adminRole->givePermissionTo($permission);
        // $technicianRole->givePermissionTo($permission);

        // $firstTwoUsers = User::orderBy('id')->take(2)->get();
        // foreach ($firstTwoUsers as $user) {
        //     $user->assignRole($adminRole);
        // }
        
        // // Assign the technician role to all other users
        // User::whereNotIn('id', $firstTwoUsers->pluck('id'))->each(function ($user) use ($technicianRole) {
        //     $user->assignRole($technicianRole);
        // });
        $this->call([
            // CategorySeeder::class,
            // AssetSeeder::class,
            // InventorySeeder::class,
            // MaintenanceLogSeeder::class,
            WorkOrderSeeder::class,
        ]);

    }
}
