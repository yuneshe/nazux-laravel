<?php

// database/seeders/WorkOrderSeeder.php

namespace Database\Seeders;

use App\Models\WorkOrder;
use App\Models\Asset;
use App\Models\User;
use Illuminate\Database\Seeder;

class WorkOrderSeeder extends Seeder
{
    public function run()
    {
        $assets = Asset::all();
        $users = User::all();

        foreach ($assets as $asset) {
            foreach ($users as $user) {
                WorkOrder::create([
                    'title'=> 'this is an assigned workoder',
                    'equipment_id' => $asset->id,
                    'created_by' => $user->id,
                    'description' => 'Work order for ' . $asset->name,
                    'status' => 'Open',
                    'scheduled_date' => now()->addDays(rand(1, 10)),
                ]);
            }
        }
    }
}
