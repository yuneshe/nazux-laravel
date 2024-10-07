<?php

// database/seeders/InventorySeeder.php

namespace Database\Seeders;

use App\Models\Inventory;
use Illuminate\Database\Seeder;

class InventorySeeder extends Seeder
{
    public function run()
    {
        Inventory::create(['name' => 'Item 1', 'quantity' => 100]);
        Inventory::create(['name' => 'Item 2', 'quantity' => 50]);
        Inventory::create(['name' => 'Item 3', 'quantity' => 75]);
    }
}
