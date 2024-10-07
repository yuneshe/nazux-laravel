<?php

// database/seeders/AssetSeeder.php

namespace Database\Seeders;

use App\Models\Asset;
use App\Models\Category;
use Illuminate\Database\Seeder;

class AssetSeeder extends Seeder
{
    public function run()
    {
        $categories = Category::all();
        $defaultCategoryId = 1;

        Asset::factory(10)->create()->each(function ($asset) use ($categories, $defaultCategoryId) {
            $asset->category_id = $categories->isNotEmpty() ? $categories->random()->id : $defaultCategoryId;
            $asset->save();
        });
    }
}
