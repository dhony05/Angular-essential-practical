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
    count = 0;
    incrementCount(count){
        count ++;
        console.log(count);
        
    }
}
// name of the class