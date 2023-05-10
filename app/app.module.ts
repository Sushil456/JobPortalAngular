import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './components/results/results.component';
import { LatestjobsComponent } from './components/latestjobs/latestjobs.component';
import { JobsInfoComponent } from './components/jobs-info/jobs-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ChartsComponent } from './components/charts/charts.component';
import { HttpClientModule } from '@angular/common/http';
import { TablesComponent } from './components/tables/tables.component';
import { DataModelsComponent } from './components/data-models/data-models.component';
import { Items } from './components/data-models/datas';
import { DatamodelinfoComponent } from './components/data-models/datamodelinfo/datamodelinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    LatestjobsComponent,
    JobsInfoComponent,
    ChartsComponent,
    TablesComponent,
    DataModelsComponent,
    DatamodelinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [Items], // declare data models in order to get accessible
  bootstrap: [AppComponent]
})
export class AppModule { }
