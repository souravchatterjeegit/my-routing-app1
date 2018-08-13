import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import {LoginService} from '../services/login.service';


@Component({
    selector:'app-login',
    template:`
        <h2>login component</h2>
        <div *ngIf="message!=''" class="alert alert-warning" role="alert">
            {{message}}
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">User Name</span>
            </div>
            <input #userName (change)=0 type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon2">Password</span>
            </div>
            <input #password (change)=0 type="password" class="form-control" placeholder="Enter password" aria-label="Enter password" aria-describedby="basic-addon2">
        </div>
        <button type="button" (click)="login(userName.value, password.value)" class="btn btn-primary">Login</button>
    `
})

export class LoginComponent implements OnInit{
    message:string = '';
    constructor(private http:Http, private router:Router, private loginService:LoginService){}
    ngOnInit(){}
    login(username:string, password:string){
        //AJAX
        this.loginService.authenticate()
        .then(data=>{
            console.log(data);
            if(data.auth){
                this.router.navigate(['profile']);
            }else{
                this.message = "Invalid UserName/password";
            }
        });
        //console.log(username, password);
        
        //if authentication successful navigate to profile page
        //else display an error message
    }
}