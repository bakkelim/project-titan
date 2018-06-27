import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { EndComponent } from './end/end.component';
import { LoginPageComponent } from './security/container/login-page.component';


const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'end', component: EndComponent },
  { path: 'login', component: LoginPageComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
