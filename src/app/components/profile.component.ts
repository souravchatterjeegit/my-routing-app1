import { Component, OnInit} from '@angular/core';
import {ContactsService} from '../services/contacts.service';
import {Contact} from '../services/contact'

@Component({
    selector:'app-profile',
    template:`
        <h2>profile component</h2>
        <ul>
            <li *ngFor="let contact of contacts|async"><a routerLink="/contacts/{{contact.id}}">{{contact.name}}</a></li>
        </ul>
    `
})

export class ProfileComponent implements OnInit{

    contacts = []
    constructor(private contactsService:ContactsService){}
    ngOnInit(){
        this.contacts = this.contactsService.getContacts();
    }
}