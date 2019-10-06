import {Component} from '@angular/core';
// component decorator

@Component({
    selector: 'display1',
    templateUrl: './display1.component.html',
    styleUrls:['./display1.component.css']
})

export class displayOneComponent {
    name = 'count';
    // a placing variables 
    // to make expression content
    // can create methods too
    method(){
        return true;
    }
}
// name of the class