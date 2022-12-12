import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SeparatorComponent, SkillsComponent } from '../../components';

@NgModule({
    declarations: [
        HomeComponent,
        SeparatorComponent,
        SkillsComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
