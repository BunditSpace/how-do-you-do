import { ConversationChartModel } from './converstaionChartModel';
import { Observable } from 'rxjs/Observable';
import { ConversationChartService } from './services/conversationChart.service';
import { AuthenticationService } from './../auth/services/authentication.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";

@Component({
  templateUrl: 'conversation-chart.html'
})
export class ConversationChart implements OnInit {

  ngOnInit(): void {
    let tempPieChartLabels = [];
    let tempPieChartData = [];
    this.chartService.getConversationChartLabel(this.authService.getUserName()).subscribe(conversationChart => 
    {
        for (let entry of conversationChart) {
            tempPieChartLabels.push(entry._id); 
            tempPieChartData.push(entry.totalCount); 
        }
    }, error => this.errorMessage = <any>error);
      this.pieChartLabels = tempPieChartLabels;
      this.pieChartData = tempPieChartData;
  }

  // Pie
  public pieChartLabels: string[] = ["","",""];
  public pieChartData: number[] = [1,1,1];
  public pieChartType: string = 'pie';
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

      this._chart.refresh();
  }
}