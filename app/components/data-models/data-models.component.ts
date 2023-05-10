import { Component } from '@angular/core';
import { Items } from './datas';

@Component({
  selector: 'app-data-models',
  templateUrl: './data-models.component.html',
  styleUrls: ['./data-models.component.css']
})
export class DataModelsComponent {

  itemstoStore:any[]=[]; // array to store these datas and can be accessed in template
  constructor(private items: Items){} // data models imported here

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.itemstoStore = this.items.items1; // store all datas from data models to itemstoStore array so that it can be accessed from this template

  }
}
