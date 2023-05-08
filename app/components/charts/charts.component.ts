import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.getChartInfo().subscribe(result=>{
      this.chartData = result;
      if(this.chartData!=null){
        for(let i =0; i<this.chartData.length ; i++){
          // console.log(this.chartData[i].name)
          this.labeldata.push(this.chartData[i].year);
          this.realdata.push(this.chartData[i].amount);
          this.colordata.push(this.chartData[i].colorcode);
          this.bordercolordata.push(this.chartData[i].borderColor)
        }
        this.renderChart(this.labeldata, this.realdata, this.colordata, this.bordercolordata, 'pie', 'piechart')
        this.renderChart(this.labeldata, this.realdata, this.colordata, this.bordercolordata, 'bar', 'barchart')
      }
    })

  }

  renderChart(labeldata:any, maindata:any, colordata:any, bordercolordata:any, type:any, id:any){

  const myChart = new Chart(id, {
    type: type,
    data: {
      labels: labeldata,
    datasets: [
      {
        label: 'Dataset 1',
        data: maindata,
        borderColor: bordercolordata,
        backgroundColor: colordata,
      }
    ]
      }
    })

}

chartData:any
realdata:any[]=[]
labeldata:any[]=[];
colordata:any[]=[];
bordercolordata:any[]=[];

getChartInfo(){
  return this.http.get("http://localhost:3000/sales");

}
}
