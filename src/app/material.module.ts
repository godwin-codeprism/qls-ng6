import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule} from '@angular/material';

@NgModule({
    imports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule],
    exports:[MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule],
})

export class MaterialModule {}