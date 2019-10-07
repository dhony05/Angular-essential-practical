import { Component } from '@angular/core';

@Component({
    selector: 'dp-item-list',
    templateUrl: './display-item-list.component.html',
    styleUrls: ['./display-item-list.component.css']

})

export class displayItemListComponent{

    items = [
        {
            name: 'patito',
            category: 'patito feo',
            gender: "male",
            age:4
        },
        {
            name: 'patitito',
            category: 'patito feo',
            gender: "male",
            age: 2
        },
        {
            name: 'Dunckbly',
            category: 'patito lindo',
            gender: "female",
            age: 1
        }
    ]


}