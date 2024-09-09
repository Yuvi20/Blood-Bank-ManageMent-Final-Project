import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterLink
    // any other server-specific modules
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
