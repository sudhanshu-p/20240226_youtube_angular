import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  currentUrl: String = ""
  urlList = [
    "/",
    "/shorts",
    "/sub",
    "/you"
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.currentUrl = val.url
      }
    })
  }
}
