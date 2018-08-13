import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AlwaysAuthGuard implements CanActivate{
    constructor(private router:Router, private loginService:LoginService){}

    canActivate(){
        if(this.loginService.authenticated){
            return true;
        }else{
            this.router.navigate(['']);
            return false;
        }
    }
    
}
