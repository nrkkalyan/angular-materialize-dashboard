import { Component, NgModule } from '@angular/core';

/**
 * You can create your own list of components and declarations.
 * These components are coming from core folder, are a standard way that we implement
 * our dashboard.
 * If you want to make a pull request to use, make sure you never change core folder because of new feature.
 * Or in case it's necessary, please open an issue
 */
import { AppComponent, CoreImports, CoreProviders, CoreDeclarations } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    ... CoreDeclarations
  ],
  imports: [
    ... CoreImports
    // Add your imports here
  ],
  providers: [
    ... CoreProviders
    // add your services here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
