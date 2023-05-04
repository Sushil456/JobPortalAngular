import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestjobsComponent } from './components/latestjobs/latestjobs.component';
import { ResultsComponent } from './components/results/results.component';
import { JobsInfoComponent } from './components/jobs-info/jobs-info.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path:'latestjobs', component:LatestjobsComponent},
  {path:'results', component:ResultsComponent},
  {path:'jobinfo', component:JobsInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
