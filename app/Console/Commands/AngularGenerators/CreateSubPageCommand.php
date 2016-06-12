<?php

namespace App\Console\Commands\AngularGenerators;

class CreateSubPageCommand extends BaseGeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng:subpage {name} {pageName}  {--path=}';

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
    public function handle()
    {
        $this->validateInput();

        $pageName=$this->argument('pageName');
        $name=$this->argument('name');
         
    /**
     * Name of Subpage Component will be {pageName.name}  .. to prevent name collision.
     */ 

        $componentName = $pageName.ucfirst($name);

     
        $targetDir = $this->getTargetDir('pages'.'/'.$pageName,$name);
        
            
        $type = 'component';

        $this->createTs($componentName, $type, $targetDir.$componentName.'.component.ts');
        $this->createHtml($componentName, $type, $targetDir.$componentName.'.component.html');
        $this->createScss($componentName, $type, $targetDir.$componentName.'.component.scss');
        $this->createSpec($componentName, $type, $targetDir.$componentName.'.spec.ts');
        $this->createIndex($componentName, $type, $targetDir.'index.ts');
        $this->updateUpIndex($name,$type,$targetDir);
       
    }
}
