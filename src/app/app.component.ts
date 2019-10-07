import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  firstItem = {
    name: 'Ducky',
    category: 'patito feo',
    gender: "female",
    age: 4,
}


  onItemDelete(item){}
}
