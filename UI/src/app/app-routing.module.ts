import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BreweryComponent } from './brewery/brewery.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'signup', component: RegisterComponent },
 { path: 'login', component: LoginComponent },
 {path:'search',component:SearchComponent},
 {path:'brewery/:id',component:BreweryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
