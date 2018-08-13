import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot } from '@angular/router';
import {ContactsService} from './contacts.service';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable()
export class ContactsResolve implements Resolve<any>{
    constructor(private contactsService:ContactsService){}
    resolve(route:ActivatedRouteSnapshot) {
        console.log(route.params['id']);
        this.contactsService.getContact(route.params['id'])
        .subscribe((data)=>{
          console.log(data);
        });
    }
}