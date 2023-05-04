import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'govtJob';


  favorite:boolean = true;
  bookmark:boolean = false;

  results = [
    {title: 'Item 1', subtitle: 'Subtitle 1'},
    {title: 'Item 2', subtitle: 'Subtitle 2'},
    {title: 'Item 3', subtitle: 'Subtitle 3'},
    {title: 'Item 4', subtitle: 'Subtitle 4'},
  ];
  admitcards = [
    {title: 'Item 1', subtitle: 'Subtitle 1'},
    {title: 'Item 2', subtitle: 'Subtitle 2'},
    {title: 'Item 3', subtitle: 'Subtitle 3'},
    {title: 'Item 4', subtitle: 'Subtitle 4'},
  ];
  jobs = [
    {title: 'Item 1', subtitle: 'Subtitle 1'},
    {title: 'Item 2', subtitle: 'Subtitle 2'},
    {title: 'Item 3', subtitle: 'Subtitle 3'},
    {title: 'Item 4', subtitle: 'Subtitle 4'},
  ];

}
