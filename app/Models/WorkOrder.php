<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkOrder extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'description', 'scheduled_date', 'status', 'equipment_id', 'created_by'
    ];

    
    public function toArray()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'scheduled_date' => $this->scheduled_date,
            'status' => $this->status,
            'created_by' => $this->created_by,
        ];
    }

    protected $dispatchesEvents = [
        'created' => WorkOrderAssigned::class,
    ];

    public function equipment()
    {
        return $this->belongsTo(Asset::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
