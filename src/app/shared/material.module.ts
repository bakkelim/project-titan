import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  declarations: [],
})
export class MaterialModule { }
