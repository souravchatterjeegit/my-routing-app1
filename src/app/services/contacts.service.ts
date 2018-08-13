import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';


@Injectable()
export class ContactsService {
    contacts:Array<Contact> = [
        {id:1, name:'Ravi', mobile:9876543210},
        {id:2, name:'Priya', mobile:9876543210},
        {id:3, name:'Chitvan', mobile:9876543210},
        {id:4, name:'Madhu', mobile:9876543210}
    ]
    constructor(){}

    getContacts(){
        //http.get
        return Observable.create((observer) => {
            observer.next(this.contacts);
        })
    }

    getContact(id: number){
        return Observable.create((observer) => {
            setTimeout(()=>{
                observer.next(this.contacts.find((contact) => contact.id == id));
            },3000)
            
        })
    }
    
}