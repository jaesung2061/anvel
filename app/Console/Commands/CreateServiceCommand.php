<?php

namespace App\Console\Commands\AngularGenerators;

class CreateServiceCommand extends BaseGeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng:service {name} {--path=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create directive files for Angular 2.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->validateInput();

        $name = $this->argument('name');
        $targetDir = $this->getTargetDir('services', $name);
        $type = 'service';

        $this->createTs($name, $type, $targetDir.$name.'.service.ts');
        $this->createSpec($name, $type, $targetDir.$name.'.spec.ts');
        $this->createIndex($name, $type, $targetDir.'index.ts');
        $this->updateUpIndex($name, $type, $targetDir);
    }
}
