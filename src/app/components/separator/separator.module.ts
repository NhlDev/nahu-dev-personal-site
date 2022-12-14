import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SeparatorComponent } from "./separator.component";

@NgModule({
    imports:[CommonModule],
    declarations: [SeparatorComponent],
    exports:[SeparatorComponent]
})
export class SeparatorModule { }