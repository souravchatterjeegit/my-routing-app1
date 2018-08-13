import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { ActivatedRouteSnapshot } from '@angular/router';
import { Contact } from './services/contact';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import {LoginComponent} from './components/login.component';
import {ProfileComponent} from './components/profile.component';
import {AlwaysAuthGuard} from './services/AlwaysAuthGuard.service';
import {LoginService} from './services/login.service';
import {ContactsService} from './services/contacts.service';
import {ContactComponent} from './components/contact.component';
import {ContactsResolve} from './services/contact.resolve';
@NgModule({
  declarations: [
    AppComponent, LoginComponent, ProfileComponent, ContactComponent
  ],
  imports: [
    BrowserModule, appRouting, HttpModule
  ],
  providers: [AlwaysAuthGuard, LoginService, ContactsService, ContactsResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
