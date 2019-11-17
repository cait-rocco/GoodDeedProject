import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharityComponent } from './charity/charity.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CharityDetailComponent } from './charity/charity-detail/charity-detail.component';
import { CharityAccountComponent } from './charity/charity-account/charity-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CharityComponent,
    VolunteerComponent,
    AccountComponent,
    HeaderComponent,
    HomeComponent,
    CharityDetailComponent,
    CharityAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
