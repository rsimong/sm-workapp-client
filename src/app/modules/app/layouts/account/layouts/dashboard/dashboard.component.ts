import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  time: string = '';
  date: string = '';

  quickAccessList: {
    icon: string;
    mainText: string;
    secondaryText: string;
  }[] = [
      { icon: 'las la-comments', mainText: 'Chat', secondaryText: 'Communicate with your team' },
      { icon: 'las la-clock', mainText: 'Time control', secondaryText: 'Keep track of your working hours' },
      { icon: 'las la-lightbulb', mainText: 'Projects management', secondaryText: 'Define your tasks' },
      { icon: 'las la-calendar-day', mainText: 'Schedule', secondaryText: 'Organize your day' },
    ];

  constructor() { }

  ngOnInit(): void {
    this.autoUpdateClock();
  }

  autoUpdateClock(): void {
    this.time = moment().format('HH:mm');
    this.date = moment().format('dddd[,] D MMMM YYYY');
    setTimeout(() => { this.autoUpdateClock() }, 1000);
  }

}
