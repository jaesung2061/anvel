<?php

namespace App\Console\Commands\AngularGenerators;

class CreatePipeCommand extends BaseGeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng:pipe {name} {--path=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create pipe files for Angular 2.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->validateInput();

        $componentName = $this->argument('name');
        $targetDir = $this->getTargetDir('pipes', $componentName);
        $type = 'pipe';

        $this->createTs($componentName, $type, $targetDir.$componentName.'.pipe.ts');
        $this->createSpec($componentName, $type, $targetDir.$componentName.'.spec.ts');
        $this->createIndex($componentName, $type, $targetDir.'index.ts');
         $this->updateUpIndex($componentName, $type, $targetDir);
    }
}
