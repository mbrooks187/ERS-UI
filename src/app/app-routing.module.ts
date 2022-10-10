import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path:"", //so when the application first starts, this component will be rendered
    component: LoginComponent
  },
  {
    path:"welcome", //path is the URL we can use to access the component
    component: WelcomeComponent //component is the component we intend to access
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
