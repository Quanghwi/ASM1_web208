import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { ManagerProductsComponent } from './component/pages/manager-products/manager-products.component';
import { ADdProductsComponent } from './component/pages/add-products/add-products.component';
import { UpdateProductsComponent } from './component/pages/update-products/update-products.component';
import { LayoutAdminComponent } from './component/layouts/layout-admin/layout-admin.component';
import { HomePageComponent } from './component/pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManagerProductsComponent,
    ADdProductsComponent,
    UpdateProductsComponent,
    LayoutAdminComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
