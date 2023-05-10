import { Component } from '@angular/core';
import { Items } from '../datas';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-datamodelinfo',
  templateUrl: './datamodelinfo.component.html',
  styleUrls: ['./datamodelinfo.component.css']
})
export class DatamodelinfoComponent {

  itemstoStore:any[]=[]; // array to get data from upper component
  selectedItems:any; // to show data of selected items
  id:any;

  constructor(private items:Items, private activatedRoute:ActivatedRoute){}
  // activatedRoute to get the current route parameter

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

      this.itemstoStore = this.items.items1;
      this.activatedRoute.params.subscribe((params:Params)=>{

      // params to get the current parameter of activatd route
      //subscribe cz it is observable

      this.id = params['id'];
      this.selectedItems = this.items.items1[this.id-1];

    })
  }
}
