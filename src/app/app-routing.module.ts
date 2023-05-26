import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/pages/home-page/home-page.component';
import { LayoutAdminComponent } from './component/layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { ManagerProductsComponent } from './component/pages/manager-products/manager-products.component';
import { UpdateProductsComponent } from './component/pages/update-products/update-products.component';
import { ADdProductsComponent } from './component/pages/add-products/add-products.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ManagerProductsComponent },
      { path: 'products/:id/update', component: UpdateProductsComponent },
      { path: 'add', component: ADdProductsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
