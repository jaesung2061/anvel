<?php

namespace App\Console\Commands\AngularGenerators;

class CreateSubPageCommand extends BaseGeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng:subpage {name} {parent} {--path=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create component files for Angular 2 Sub Page.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle() {
        $this->validateInput();

        $parent = $this->argument('parent');
        $subPageName = $this->argument('name');
        $targetDir = $this->getTargetDir('pages/'.$parent, $subPageName);
        $type = 'component';

        $this->createTs($subPageName, $type, $targetDir.$subPageName.'.component.ts');
        $this->createHtml($subPageName, $type, $targetDir.$subPageName.'.component.html');
        $this->createScss($subPageName, $type, $targetDir.$subPageName.'.component.scss');
        $this->createSpec($subPageName, $type, $targetDir.$subPageName.'.spec.ts');
        $this->createIndex($subPageName, $type, $targetDir.'index.ts');
        $this->updateUpIndex($subPageName, $type, $targetDir);
    }
}
