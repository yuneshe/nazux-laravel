<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Maintenance;
use App\Models\Notification;
use App\Models\User;
use Carbon\Carbon;

class CheckUpcomingMaintenance extends Command
{
    protected $signature = 'maintenance:check-upcoming';

    protected $description = 'Check for upcoming maintenance tasks and generate notifications';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $upcomingMaintenances = Maintenance::where('start_date', '>', Carbon::now())
            ->where('start_date', '<=', Carbon::now()->addDays(7))
            ->get();

        foreach ($upcomingMaintenances as $maintenance) {
            $users = User::all(); // Or filter based on your logic

            foreach ($users as $user) {
                Notification::create([
                    'user_id' => $user->id,
                    'maintenance_id' => $maintenance->id,
                    'message' => "Upcoming maintenance: {$maintenance->title} on {$maintenance->start_date}",
                ]);
            }
        }

        $this->info('Notifications for upcoming maintenance tasks generated successfully.');
    }
}
