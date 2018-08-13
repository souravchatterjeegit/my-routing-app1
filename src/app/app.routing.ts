import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login.component';
import {ProfileComponent} from './components/profile.component';
import {AlwaysAuthGuard} from './services/AlwaysAuthGuard.service';
import {ContactComponent} from './components/contact.component';
import {ContactsResolve} from './services/contact.resolve';

const routes:Routes = [
    {path:'', component:LoginComponent},
    {path:'profile', component:ProfileComponent, canActivate:[AlwaysAuthGuard]},
    {path:'contacts/:id', component:ContactComponent, resolve:{
        contact:ContactsResolve
    }},
    {path:'**', pathMatch:'full', redirectTo:''}
];

export const appRouting = RouterModule.forRoot(routes);