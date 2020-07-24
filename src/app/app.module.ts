import { NgModule, Injector } from '@angular/core';
import { DialogComponent } from './dialog-box/dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

// import { AppComponent } from './app.component';

@NgModule({
  // declarations: [AppComponent, DialogComponent],
  imports: [BrowserModule],
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(DialogComponent, {
      injector: this.injector,
    });
    customElements.define('app-dialog', el);
  }
}
