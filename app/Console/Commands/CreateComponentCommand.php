<?php namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\File;
use Illuminate\View\Compilers\BladeCompiler;

class CreateComponentCommand extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng2:component {name} {--path=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create component files for Angular 2.';
    /**
     * @var Filesystem
     */
    protected $filesystem;

    /**
     * Create a new command instance.
     *
     * @param Filesystem $filesystem
     */
    public function __construct(Filesystem $filesystem)
    {
        parent::__construct();

        $this->filesystem = $filesystem;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->validate();

        $componentName = strtolower($this->argument('name'));
        $targetDir = $this->getTargetDir($componentName);

        $this->createTs($componentName, $targetDir.$componentName.'.component.ts');
        $this->createHtml($componentName, $targetDir.$componentName.'.component.html');
        $this->createScss($componentName, $targetDir.$componentName.'.component.scss');
        $this->createSpec($componentName, $targetDir.$componentName.'.spec.ts');
        $this->createIndex($componentName, $targetDir.'index.ts');
    }

    /**
     * @throws Exception
     */
    protected function validate()
    {
        if (!preg_match('/^[a-z0-9-_]+$/i', $this->argument('name')))
        {
            throw new Exception;
        }
    }

    /**
     * @param $name
     * @param $path
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function createTs($name, $path)
    {
        // For use on component decorator to identify css and template path
        $cssPath = str_replace('angular/', '', str_replace('.ts', '.css', $this->normalize($path)));
        $templatePath = str_replace('angular/', '', str_replace('.ts', '.html', $this->normalize($path)));
        $upperCamelCaseName = str_replace('-', '', ucwords($name, '-_'));

        $content = $this->filesystem->get(__DIR__.'/../../../resources/stubs/component.ts.blade.php');
        $content = $this->compile($content, compact('name', 'upperCamelCaseName','cssPath', 'templatePath'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

    /**
     * @param $name
     * @param $path
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function createHtml($name, $path)
    {
        $content = $this->filesystem->get(__DIR__.'/../../../resources/stubs/component.html.blade.php');
        $content = $this->compile($content, compact('name'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

    /**
     * @param $name
     * @param $path
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function createScss($name, $path)
    {
        $content = $this->filesystem->get(__DIR__.'/../../../resources/stubs/component.scss.blade.php');
        $content = $this->compile($content, compact('name'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

    /**
     * @param $name
     * @param $path
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function createSpec($name, $path)
    {
        $content = $this->filesystem->get(__DIR__.'/../../../resources/stubs/component.spec.ts.blade.php');
        $content = $this->compile($content, compact('name'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

    /**
     * @param $name
     * @param $path
     * @throws Exception
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    protected function createIndex($name, $path)
    {
        $content = $this->filesystem->get(__DIR__.'/../../../resources/stubs/index.ts.blade.php');
        $content = $this->compile($content, compact('name'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

    /**
     * @param $componentName
     * @return string
     */
    protected function getTargetDir($componentName)
    {
        $appRoot = __DIR__.'/../../../';
        $option = $this->option('path');

        if ($option)
        {
            $path = $appRoot.$this->option('path').'/';
        }
        else
        {
            $path = $appRoot.'angular/app/'.$componentName.'/';
        }

        if (!File::exists($path))
        {
            File::makeDirectory($path);
        }

        return $path;
    }

    /**
     * @param $value
     * @param array $args
     * @return string
     * @throws Exception
     */
    public function compile($value, array $args = [])
    {
        $generated = Blade::compileString($value);

        ob_start() and extract($args, EXTR_SKIP);

        // We'll include the view contents for parsing within a catcher
        // so we can avoid any WSOD errors. If an exception occurs we
        // will throw it out to the exception handler.
        try
        {
            eval('?>'.$generated);
        }

            // If we caught an exception, we'll silently flush the output
            // buffer so that no partially rendered views get thrown out
            // to the client and confuse the user with junk.
        catch (\Exception $e)
        {
            ob_get_clean(); throw $e;
        }

        $content = ob_get_clean();

        return $content;
    }

    /**
     * @param $path
     * @param $content
     * @throws Exception
     */
    protected function safePut($path, $content)
    {
        if (File::exists($path))
        {
            throw new Exception("File {$this->normalize($path)} already exists.");
        }

        $this->filesystem->put($path, $content);
    }

    /**
     * Normalize path
     *
     * @param $path
     * @return string
     */
    protected function normalize($path)
    {
        $root = ($path[0] === '/') ? '/' : '';

        $segments = explode('/', trim($path, '/'));

        $ret = array();

        foreach ($segments as $segment)
        {
            if (($segment == '.') || strlen($segment) === 0)
            {
                continue;
            }
            if ($segment == '..')
            {
                array_pop($ret);
            }
            else
            {
                array_push($ret, $segment);
            }
        }
        return str_replace('\\', '/', $root.implode('/', $ret));
    }
}