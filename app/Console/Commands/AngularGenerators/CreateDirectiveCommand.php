<?php

namespace App\Console\Commands\AngularGenerators;

class CreateDirectiveCommand extends BaseGeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng2:directive {name} {--attribute=true} {--path=}';

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
        $targetDir = $this->getTargetDir($directiveName);
        $isAttributeDirective = filter_var($this->option('attribute'), FILTER_VALIDATE_BOOLEAN);
        $type = 'directive';

        $this->createTs($directiveName, $type, $targetDir.$directiveName.'.directive.ts', ['attribute' => $isAttributeDirective]);
        $this->createSpec($directiveName, $type, $targetDir.$directiveName.'.spec.ts');
        $this->createIndex($directiveName, $type, $targetDir.'index.ts');

        if (!$isAttributeDirective) {
            $this->createHtml($directiveName, $type, $targetDir.$directiveName.'.directive.html');
            $this->createScss($directiveName, $type, $targetDir.$directiveName.'.directive.scss');
        }
    }
}
