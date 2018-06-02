import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatProgressBarModule, MatBottomSheetModule } from '@angular/material';

@NgModule({
    providers: [],
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatProgressBarModule, MatBottomSheetModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatProgressBarModule, MatBottomSheetModule],
})

export class MaterialModule { }