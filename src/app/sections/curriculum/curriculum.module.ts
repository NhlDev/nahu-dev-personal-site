import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { CurriculumRoutingModule } from './curriculum-routing.module';


@NgModule({
    declarations: [
        CurriculumComponent,
    ],
    imports: [
        CommonModule,
        CurriculumRoutingModule
    ]
})
export class CurriculumModule { }
