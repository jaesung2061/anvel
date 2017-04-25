<?php

namespace App\Console\Commands\AngularGenerators;

class CreateComponentCommand extends BaseGeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng:component {name} {--path=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create component files for Angular 2.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->validateInput();

        $componentName = $this->argument('name');
        $targetDir = $this->getTargetDir('components', $componentName);
        $type = 'component';

        $this->createTs($componentName, $type, $targetDir.$componentName.'.component.ts');
        $this->createHtml($componentName, $type, $targetDir.$componentName.'.component.html');
        $this->createScss($componentName, $type, $targetDir.$componentName.'.component.scss');
        $this->createSpec($componentName, $type, $targetDir.$componentName.'.spec.ts');
        $this->createIndex($componentName, $type, $targetDir.'index.ts');
        $this->updateUpIndex($componentName, $type, $targetDir);
    }
}
