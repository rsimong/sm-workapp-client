import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOptions: {
    url: string[];
    icon: string;
  }[] = [
      { url: ['/', 'app', 'a', 'dashboard'], icon: "las la-home" },
      { url: ['/', 'app', 'a', 'dasboard'], icon: "las la-comments" },
      { url: ['/', 'app', 'a', 'dasboard'], icon: "las la-clock" },
      { url: ['/', 'app', 'a', 'dasboard'], icon: "las la-id-card" },
      { url: ['/', 'app', 'a', 'dasboard'], icon: "las la-lightbulb" },
      { url: ['/', 'app', 'a', 'dasboard'], icon: "las la-calendar-day" }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
