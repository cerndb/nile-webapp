import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './environments/environment';
import { bootloader } from '@angularclass/hmr';

/*
 * App Module
 * our top level module that holds all of our pages
 */
import { AppModule } from './app/app.module';


export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));

}


bootloader(main);
