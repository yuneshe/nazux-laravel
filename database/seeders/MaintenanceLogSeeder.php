<?php

// database/seeders/MaintenanceLogSeeder.php

namespace Database\Seeders;

use App\Models\MaintenanceLog;
use App\Models\Asset;
use Illuminate\Database\Seeder;

class MaintenanceLogSeeder extends Seeder
{
    public function run()
    {
        $assets = Asset::all();

        foreach ($assets as $asset) {
            MaintenanceLog::create([
                'asset_id' => $asset->id,
                'description' => 'Maintenance for ' . $asset->name,
                'downtime' => rand(1, 10),
                'completed_at' => now()->subDays(rand(1, 30)),
            ]);
        }
    }
}

