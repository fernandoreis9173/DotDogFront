import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
// import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';


@NgModule(
    {
        providers:[],
        declarations:[HomeComponent],
        imports:[
            CommonModule,
            HomeRoutingModule,
            NavbarModule,
            // SidebarModule
        ]
    }
)

export class DashboardModule{}
