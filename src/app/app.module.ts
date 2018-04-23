import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import { SearchResultComponent } from './home-page/search-result/search-result.component';
import { SearchResultListComponent } from './home-page/search-result/search-result-list/search-result-list.component';
import { HelpComponent } from './shared/help/help.component';
import { SupportComponent } from './shared/support/support.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { PoliciesComponent } from './shared/policies/policies.component';
import { ConnectUsComponent } from './shared/connect-us/connect-us.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
=======
import { AppRoutingModule } from './/app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { FarmerModule } from './farmer/farmer.module';
<<<<<<< HEAD
>>>>>>> 90646016b12337f3b1358addacb3ba22c9760535

=======
import { HomePageComponent } from './home-page/home-page.component';
import { CommonHeaderComponent } from './shared/common-header/common-header.component';
>>>>>>> df0b1748768f4a8738565a920413120bc79e09ad

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SearchResultComponent,
    SearchResultListComponent,
    HelpComponent,
    SupportComponent,
    AboutUsComponent,
    PoliciesComponent,
    ConnectUsComponent,
    HomePageComponent,
    CommonHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    FarmerModule,
    FormsModule,
    HttpModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
