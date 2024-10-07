<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Console\Scheduling\Schedule;

class ScheduleServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot(Schedule $schedule)
    {
        $commands = config('schedule.commands');
        foreach ($commands as $command) {
            $schedule->command($command['command'])->{$command['frequency']}();
        }
    }
}
