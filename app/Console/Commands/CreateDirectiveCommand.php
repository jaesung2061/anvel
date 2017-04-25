<?php

namespace App\Console\Commands\AngularGenerators;

class CreateDirectiveCommand extends BaseGeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng:directive {name} {--path=}';

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

        $directiveName = $this->argument('name');
        $targetDir = $this->getTargetDir('directives', $directiveName);
        $type = 'directive';

        $this->createTs($directiveName, $type, $targetDir.$directiveName.'.directive.ts');
        $this->createSpec($directiveName, $type, $targetDir.$directiveName.'.spec.ts');
        $this->createIndex($directiveName, $type, $targetDir.'index.ts');
        $this->updateUpIndex($directiveName, $type, $targetDir);
    }
}
