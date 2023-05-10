import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestjobsComponent } from './components/latestjobs/latestjobs.component';
import { ResultsComponent } from './components/results/results.component';
import { JobsInfoComponent } from './components/jobs-info/jobs-info.component';
import { AppComponent } from './app.component';
import { DataModelsComponent } from './components/data-models/data-models.component';
import { DatamodelinfoComponent } from './components/data-models/datamodelinfo/datamodelinfo.component';

const routes: Routes = [

  {path:'latestjobs', component:LatestjobsComponent},
  {path:'results', component:ResultsComponent},
  {path:'jobinfo', component:JobsInfoComponent},


  {path:'item', component:DataModelsComponent}, // contains all items list
  {path:'item/:id', component:DatamodelinfoComponent} //show specific items details

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
