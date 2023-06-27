import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageStockComponent } from './manage-stock/manage-stock.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'managestock', component: ManageStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
