import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { UpdateProductComponent } from './update-product/update-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchPipe } from './pipes/search.pipe';
import { LoginComponent } from './login/login.component';
// import { CarouselComponent } from './carousel/carousel.component';
// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { HammerModule } from '@angular/platform-browser';
// import { IgxCarouselModule } from 'igniteui-angular';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SearchUserPipe } from './pipes/search-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ManageStockComponent,
    HomeComponent,
    UpdateProductComponent,
    SearchPipe,
    LoginComponent,
    // CarouselComponent,
    // MdbCarouselModule
    ManageUserComponent,
    UpdateUserComponent,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    // NgbModule,
    // HammerModule,
    // IgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
