import { ConversationChartModel } from './converstaionChartModel';
import { Observable } from 'rxjs/Observable';
import { ConversationChartService } from './services/conversationChart.service';
import { AuthenticationService } from './../auth/services/authentication.service';
import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";

@Component({
  templateUrl: 'conversation-chart.html'
})
export class ConversationChart {

  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';

  public chartData: ConversationChartModel[];
  errorMessage: string;

   @ViewChild(BaseChartDirective) private _chart;

  constructor(private authService: AuthenticationService, private chartService: ConversationChartService) {
     
  }
  // events
  public chartClicked(e: any): void {

    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public generateChart()
  {
    this.pieChartLabels = [];
    this.pieChartData = [];
    this.chartService.getConversationChartLabel(this.authService.getUserName()).subscribe(conversationChart => 
    {
        for (let entry of conversationChart) {
            this.pieChartLabels.push(entry._id); 
            this.pieChartData.push(entry.totalCount); 
        }
    }, error => this.errorMessage = <any>error);
    this._chart.refresh();
  }
}