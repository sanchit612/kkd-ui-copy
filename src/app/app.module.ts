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
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { FarmerModule } from './farmer/farmer.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CommonHeaderComponent } from './shared/common-header/common-header.component';
import { CustomerHeaderComponent } from './customer/component/customer-header/customer-header.component';
import {CustomerHeaderService} from './customer/services/customer-header.service';
import { FarmerHeaderComponent } from './farmer/component/farmer-header/farmer-header.component';
import {FarmerHeaderService} from './farmer/services/farmer-header/farmer-header.service';
import { FarmerMyAccountComponent } from './farmer/component/farmer-my-account/farmer-my-account.component';
import { CustomerAuthenticationService } from './customer/services/customer-authentication.service';
import {CustomerMyAccountComponent} from './customer/component/customer-my-account/customer-my-account.component';
import{CustomerCurrentOrderComponent} from './customer/component/customer-my-account/customer-current-order/customer-current-order.component';
import{CustomerAddressBookComponent} from './customer/component/customer-my-account/customer-address-book/customer-address-book.component';
import {CustomerPreviousOrderComponent} from './customer/component/customer-my-account/customer-previous-order/customer-previous-order.component';


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
    CommonHeaderComponent,
    CustomerHeaderComponent,
    FarmerHeaderComponent,
    FarmerMyAccountComponent,
    CustomerMyAccountComponent,
    CustomerCurrentOrderComponent,
    CustomerAddressBookComponent,
    CustomerPreviousOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    FarmerModule,
    FormsModule,
    HttpModule
  ],

  providers: [CustomerAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
