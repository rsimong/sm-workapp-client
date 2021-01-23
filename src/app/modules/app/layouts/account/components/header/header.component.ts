import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageTitle: string = 'Home';

  user: {
    avatar: string;
  } = {
      avatar: '../../../../../../../assets/imgs/avatar/girl-1990347_640.jpg'
    };

  constructor() { }

  ngOnInit(): void {
  }

}
