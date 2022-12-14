import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {  SkillsComponent } from '../../components';
import { SeparatorModule } from '../../components/separator/separator.module';

@NgModule({
    declarations: [
        HomeComponent,
        SkillsComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SeparatorModule
    ]
})
export class HomeModule { }
