import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest-tabs',
  standalone: true,
  imports: [],
  templateUrl: './interest-tabs.component.html',
  styleUrl: './interest-tabs.component.css'
})

export class InterestTabsComponent {
  @Input() trendingTopics: Array<String> = []
}