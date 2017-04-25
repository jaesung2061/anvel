<?php

namespace App\Console\Commands\AngularGenerators;

class CreatePageCommand extends BaseGeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng:page {name} {--routes} {--path=}';

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
        $targetDir = $this->getTargetDir('pages', $componentName);
        $type = 'component';
        $routes = !!$this->option('routes');

        $this->createTs($componentName, $type, $targetDir.$componentName.'.component.ts', $routes);
        $this->createHtml($componentName, $type, $targetDir.$componentName.'.component.html', $routes);
        $this->createScss($componentName, $type, $targetDir.$componentName.'.component.scss');
        $this->createSpec($componentName, $type, $targetDir.$componentName.'.spec.ts');
        $this->createIndex($componentName, $type, $targetDir.'index.ts', $routes);

        if ($routes) {
            $this->createRoutes($componentName, $targetDir.$componentName.'.routes.ts');
        }

        $this->updateUpIndex($componentName, $type, $targetDir);
    }

    protected function createRoutes($name, $path)
    {
        // For use on component decorator to identify css and template path
        $upperCamelCaseName = str_replace('-', '', ucwords($name, '-_'));

        $content = $this->filesystem->get($this->stubsPath.'routes.ts.blade.php');
        $content = $this->compile($content, compact('name', 'upperCamelCaseName'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }
}
