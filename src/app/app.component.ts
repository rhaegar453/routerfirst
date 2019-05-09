import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routerfirst';
  clicked:boolean=false

  submitted(){
    this.clicked=!this.clicked
    console.log(`The current state of the button is ${this.clicked}`)
  }
}
