import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { CurriculumRoutingModule } from './curriculum-routing.module';
import { SeparatorModule } from '../../components/separator/separator.module';


@NgModule({
    declarations: [
        CurriculumComponent,
    ],
    imports: [
        CommonModule,
        CurriculumRoutingModule,
        SeparatorModule
    ]
})
export class CurriculumModule { }
