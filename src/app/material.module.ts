import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialModuleArr = [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
];

@NgModule({
    imports:[...materialModuleArr],
    exports:[...materialModuleArr]
})
export class MaterialModule{}