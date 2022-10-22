import { Component } from '@angular/core';
import {ressults} from "../result";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result =  ressults;
  selectedIndex?:number = undefined;
}
