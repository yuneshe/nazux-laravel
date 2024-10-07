<?php

// app/Models/MaintenanceLog.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaintenanceLog extends Model
{
    use HasFactory;

    protected $fillable = ['asset_id', 'description', 'downtime', 'completed_at'];

    // Define relationships
    public function asset()
    {
        return $this->belongsTo(Asset::class);
    }
}
