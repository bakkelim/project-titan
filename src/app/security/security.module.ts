import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './presentation/login.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AppAuthUserEffects } from './state/app-auth-user.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    EffectsModule.forFeature([AppAuthUserEffects])
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent]
})
export class SecurityModule { }
