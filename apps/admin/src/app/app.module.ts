import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';

import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {  HttpClientModule } from '@angular/common/http';
import { CategoriesService } from '@bluebits/products';

const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'categories',
                component: CategoriesListComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ShellComponent, 
        SidebarComponent, 
        DashboardComponent, 
        CategoriesListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' }), 
        CardModule, 
        ToolbarModule,
        ButtonModule,
        TableModule
    ],
    providers: [CategoriesService],
    bootstrap: [AppComponent]
})
export class AppModule {}
