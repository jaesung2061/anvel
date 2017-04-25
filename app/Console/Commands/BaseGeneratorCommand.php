<?php

namespace App\Console\Commands\AngularGenerators;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\File;

abstract class BaseGeneratorCommand extends Command
{
    /**
     * @var Filesystem
     */
    protected $filesystem;

    /**
     * @var string
     */
    protected $stubsPath = __DIR__.'/../../../../resources/stubs/';

    /**
     * BaseGeneratorCommand constructor.
     *
     * @param Filesystem $filesystem
     */
    public function __construct(Filesystem $filesystem)
    {
        parent::__construct();

        $this->filesystem = $filesystem;
    }

    /**
     * @param $name
     * @param $type
     * @param $path
     * @param bool $routes
     * @throws Exception
     * @throws FileNotFoundException
     */
    protected function createTs($name, $type, $path, $routes = false)
    {
        // For use on component decorator to identify css and template path
        $cssPath = str_replace('angular/', '', str_replace('.ts', '.css', $this->normalize($path)));
        $templatePath = str_replace('angular/', '', str_replace('.ts', '.html', $this->normalize($path)));
        $upperCamelCaseName = str_replace('-', '', ucwords($name, '-_'));

        $content = $this->filesystem->get($this->stubsPath.$type.'.ts.blade.php');
        $content = $this->compile($content, compact(
            'name',
            'type',
            'upperCamelCaseName',
            'cssPath',
            'templatePath',
            'options',
            'routes'
        ));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

     /**
     * @param $name
     * @param $type
     * @param $path
     * @throws Exception
     * @throws FileNotFoundException
     */

    public function updateUpIndex($name, $type, $path) {
        $indexPath = "$path/../index.ts";
        $statement = "export * from './".$name."';\n";
        $fileContent = File::get($indexPath);

        // Clean up the new line characters as different operating
        // systems put different characters for line breaks.
        $fileContent = str_replace(["\r", "\n"], '', $fileContent);
        $fileContent = explode(';', $fileContent);
        $fileContent = implode(";\n", $fileContent);

        File::delete($indexPath);
        File::append($indexPath, $fileContent.$statement);

        $this->info("Updated {$this->normalize($path."./../index.ts")}.");
    }

    /**
     * @param $name
     * @param $type
     * @param $path
     * @param bool $routes
     * @throws Exception
     * @throws FileNotFoundException
     */
    protected function createHtml($name, $type, $path, $routes = false)
    {
        $content = $this->filesystem->get($this->stubsPath.'html.blade.php');
        $content = $this->compile($content, compact('name', 'type', 'routes'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

    /**
     * @param $name
     * @param $type
     * @param $path
     * @throws Exception
     * @throws FileNotFoundException
     */
    protected function createScss($name, $type, $path)
    {
        $content = $this->filesystem->get($this->stubsPath.'scss.blade.php');
        $content = $this->compile($content, compact('name', 'type'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

    /**
     * @param $name
     * @param $type
     * @param $path
     * @throws Exception
     * @throws FileNotFoundException
     */
    protected function createSpec($name, $type, $path)
    {
        $upperCamelCaseName = str_replace('-', '', ucwords($name, '-_'));

        $content = $this->filesystem->get($this->stubsPath.'spec.ts.blade.php');
        $content = $this->compile($content, compact('name', 'type', 'upperCamelCaseName'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

    /**
     * @param $name
     * @param $type
     * @param $path
     * @param bool $routes
     * @throws Exception
     * @throws FileNotFoundException
     */
    protected function createIndex($name, $type, $path, $routes = false)
    {
        $content = $this->filesystem->get($this->stubsPath.'index.ts.blade.php');
        $content = $this->compile($content, compact('name', 'type', 'routes'));

        $this->safePut($path, $content);

        $this->info("Generated {$this->normalize($path)}.");
    }

    /**
     * @param $subDir
     * @param $componentName
     * @return string
     */
    protected function getTargetDir($subDir, $componentName)
    {
        $appRoot = __DIR__.'/../../../../';
        $option = $this->option('path');

        if ($option) {
            $path = $appRoot.$this->option('path').'/'.$subDir.'/'.$componentName.'/';
        } else {
            $path = $appRoot.'angular/app/'.$subDir.'/'.$componentName.'/';
        }

        if (!File::exists($path)) {
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
        try {
            eval('?>'.$generated);
        }

            // If we caught an exception, we'll silently flush the output
            // buffer so that no partially rendered views get thrown out
            // to the client and confuse the user with junk.
        catch (Exception $e) {
            ob_get_clean();
            throw $e;
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
        if (File::exists($path)) {
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

        foreach ($segments as $segment) {
            if (($segment == '.') || strlen($segment) === 0) {
                continue;
            }
            if ($segment == '..') {
                array_pop($ret);
            } else {
                array_push($ret, $segment);
            }
        }
        return str_replace('\\', '/', $root.implode('/', $ret));
    }

    /**
     * @throws Exception
     */
    protected function validateInput()
    {
        if (!preg_match('/^[a-z0-9-_]+$/i', $this->argument('name'))) {
            throw new Exception;
        }
    }
}