<?php

namespace App\Events;

use App\Models\WorkOrder;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class WorkOrderAssigned implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $workOrder;

    public function __construct(WorkOrder $workOrder)
    {
        $this->workOrder = $workOrder;
    }

    public function broadcastOn()
    {
        return new PrivateChannel('work-order.' . $this->workOrder->created_by);
    }

    public function broadcastAs()
    {
        return 'work-order.created';
    }

    public function broadcastWith()
    {
        return [
            'workOrder' => $this->workOrder->toArray(),
        ];
    }
}
