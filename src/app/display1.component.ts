import {Component, Input, Output ,EventEmitter} from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
// component decorator

@Component({
    selector: 'display1',
    templateUrl: './display1.component.html',
    styleUrls:['./display1.component.css']
})

export class displayOneComponent {
    @Input() item;

    @Output() delete = new EventEmitter();



    OnDelete(){
        console.log("delete was clicked");
        this.delete.emit(this.item);
    }


    name = 'count';
    // a placing variables 
    // to make expression content
    // can create methods too
    method(){
        return true;
    }
    count = 0;
    incrementCount(count){
        count ++ ;
        console.log(count);
        console.log('Count clicked!')
        
    }
}
// name of the class