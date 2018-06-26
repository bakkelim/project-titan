import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
