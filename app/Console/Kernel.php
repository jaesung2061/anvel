<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Laravel\Lumen\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel {
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\AngularGenerators\CreateComponentCommand::class,
        Commands\AngularGenerators\CreateDirectiveCommand::class,
        Commands\AngularGenerators\CreateServiceCommand::class,
        Commands\AngularGenerators\CreatePipeCommand::class,
        Commands\AngularGenerators\CreatePageCommand::class,
        Commands\AngularGenerators\CreateSubPageCommand::class,
        \Mlntn\Console\Commands\Serve::class,
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        //
    }
}
