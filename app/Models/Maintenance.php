<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Maintenance extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description','start_date', 'equipment_id', 'procedures', 'frequency'];

    public function equipment()
    {
        return $this->belongsTo(Asset::class, 'equipment_id');
    }

    public function parts()
    {
        return $this->belongsToMany(Asset::class, 'maintenance_asset', 'maintenance_id', 'asset_id')->wherePivot('type', 'part');
    }

    public function tools()
    {
        return $this->belongsToMany(Asset::class, 'maintenance_asset', 'maintenance_id', 'asset_id')->wherePivot('type', 'tool');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }
}
