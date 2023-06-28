import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { page: 'login' } },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'managestock', component: ManageStockComponent},
  { path: 'manageuser', component: ManageUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
