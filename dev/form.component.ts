import {Component} from 'angular2/core';

@Component({
    selector: "my-form",
    template: `
        <div>
            Write the command
            <br/>
            <input type="text" [(ngModel)]="ex.change">
            <p *ngIf="ex.change==='change'" style="color: #cc0000;">
                Change the ID
                <input type="text" [(ngModel)]="ex.id"> <br/>
                 Change the NAME
                <input type="text" [(ngModel)]="ex.name">
            </p>
        </div>
        <div>
            ID = {{ex.id}}, NAME = {{ex.name}}
        </div>
    `
})

export class MyFormComponent {
    public ex =
        {
            id: 1,
            name: "Milk",
            change:"Nah"
        };

}