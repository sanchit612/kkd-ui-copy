import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import { SearchResultComponent } from './shared/search-result/search-result.component';
import { SearchResultListComponent } from './shared/search-result/search-result-list/search-result-list.component';
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
>>>>>>> 90646016b12337f3b1358addacb3ba22c9760535


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
    ConnectUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    FarmerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
