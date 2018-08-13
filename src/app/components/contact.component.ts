import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../services/contact';
import {ContactsService} from '../services/contacts.service';

@Component({
    selector:'app-contact',
    template:`
        <h2>Display Contact Details</h2>
        <p>Contact Id {{contact?.id}}    </p>
        <p>Contact name {{contact?.name}}</p>
        <p>Contact mobile {{contact?.mobile}}</p>
    `
})

export class ContactComponent implements OnInit{
    contact:Contact ;
    //id:number;
    constructor(public activatedRoute:ActivatedRoute, private contactsService:ContactsService){}
    ngOnInit(){//contact
        console.log("In ngOnInit");
        //this.contact = this.activatedRoute.snapshot.data['contact'];

        
    }
}