import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "./polyfills";
import { AppModule } from './app/app.module';


enableProdMode();

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);