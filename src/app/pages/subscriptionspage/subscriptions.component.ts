import { Component, OnInit } from '@angular/core';
import { MainContentComponent } from '../../components/main-content/main-content.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [MainContentComponent],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})


export class SubscriptionsComponent implements OnInit {

  videoData: Array<video> = []

  constructor(private dataService: DataService) { }

  // Subscribing to the data when Initialized.
  ngOnInit(): void {
    this.dataService.videoData$.subscribe(videoData => {
      this.videoData = videoData.filter((video: video) => video.isSubscribed)
    })
  }
}
