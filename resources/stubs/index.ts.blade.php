export * from './{{ $name }}.{{ $type }}';
@if($routes)export * from './{{ $name }}.routes';{{ "\n" }}@endif