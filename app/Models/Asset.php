<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Asset extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id',
        'value',
        'location',
        'description',
        'manufacturer',
    ];

    
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($asset) {
            if ($asset->attachment) {
                Storage::delete($asset->attachment->file_path);
                $asset->attachment->delete();
            }

            if ($asset->photo) {
                Storage::delete($asset->photo->file_path);
                $asset->photo->delete();
            }
        });
    }


    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }

    public function photo()
    {
        return $this->hasOne(Photo::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function workOrders()
    {
        return $this->hasMany(WorkOrder::class);
    }

    public function inventories()
    {
        return $this->hasMany(Inventory::class);
    }

    public function maintenanceLogs()
    {
        return $this->hasMany(MaintenanceLog::class);
    }

    public function maintenances()
    {
       return $this->belongsToMany(Maintenance::class, 'maintenance_asset', 'asset_id', 'maintenance_id')->withPivot('type');
    }
}
