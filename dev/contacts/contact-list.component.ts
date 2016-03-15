import {Component} from "angular2/core";
import {ContactComponent} from "./contact.component";

@Component({
    selector: "contact-list",
    template: `
        <ul>
            <li *ngFor="#theContact of contacts"
                (click)="onSelect(theContact)" 
                [class.clicked]="selectedContact === theContact"> 
                    {{theContact.firstName}} {{theContact.lastName}}
            </li>
        </ul>
        <contact [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent],
    styleUrls: ["../src/css/app.css"]
})
export class ContactListComponent {
    public contacts = [ 
        {firstName: "George", lastName: "Assi", phone: "2310 123456", email: "info@gmail.com"},
        {firstName: "Kostas", lastName: "Mouta", phone: "2310 145431", email: "mouta@gmail.com"},
        {firstName: "Aggelos", lastName: "Papas", phone: "2310 302147", email: "aggelos@gmail.com"}
    ];
    public selectedContact = {};
    
    onSelect(theContact) {
        this.selectedContact = theContact;
    }
}