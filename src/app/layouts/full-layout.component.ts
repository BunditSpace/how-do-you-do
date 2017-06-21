import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class FullLayoutComponent implements OnInit {

  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};
  public displayname: string;
  public displayemail: string;

  public toggled(open: boolean): void {
    console.log(open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor()
  {

  }
  
  ngOnInit(): void 
  {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.displayname = currentUser.local.username;  
    this.displayemail = currentUser.local.email;
  }

}
