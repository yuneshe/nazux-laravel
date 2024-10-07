<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\PreventiveMaintenance;
use App\Models\User;
use App\Models\Notification;
use Carbon\Carbon;

class NotifyUpcomingMaintenance extends Command
{
    protected $signature = 'notify:upcoming-maintenance';
    protected $description = 'Notify users of upcoming preventive maintenance tasks';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $upcomingMaintenances = PreventiveMaintenance::where('start_date', '>=', Carbon::now())
            ->where('start_date', '<=', Carbon::now()->addWeek())
            ->get();

        foreach ($upcomingMaintenances as $maintenance) {
            $users = User::all(); // Or filter based on your logic

            foreach ($users as $user) {
                Notification::create([
                    'user_id' => $user->id,
                    'maintenance_id' => $maintenance->id,
                    'message' => 'Upcoming maintenance: ' . $maintenance->title,
                ]);
            }
        }

        $this->info('Notifications sent successfully!');
    }
}
