import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
    declarations: [AppComponent, ShellComponent, SidebarComponent],
    imports: [BrowserModule, RouterModule.forRoot([], { initialNavigation: 'enabled' })],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
