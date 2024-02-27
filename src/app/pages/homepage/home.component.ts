import { Component, Input, OnInit } from '@angular/core';
import { MainContentComponent } from '../../components/main-content/main-content.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // videoData: Array<video> = [
  //   {
  //     title: "Natural Juice | Red Tender Coconut Sharbath | Healthy Juice",
  //     views: "28M",
  //     uploadDate: "9 months ago",
  //     channel: "Village Cooking channel",
  //     channelProfileIconUrl: "https://yt3.ggpht.com/4eEETdAR33227A9KRhQ1T4P2NyYReiZKMeaN_rZ8QZ1LSCLUudaggLhZ1C40RkDyw6SejAmW=s68-c-k-c0x00ffffff-no-rj",
  //     videoThumbnailUrl: "https://i.ytimg.com/vi/-TAWQtjh4w8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9H4oEXDflP0jVNCCUoIj7JHM5zg"
  //   },
  //   {
  //     title: "NZ vs AUS 3rd T20I Highlights",
  //     views: "2.2M",
  //     uploadDate: "1 day ago",
  //     channel: "Prime Video India",
  //     channelProfileIconUrl: "https://yt3.ggpht.com/tV7mR48kz0fcbL4056L7S_pfqygwKrRQB1Rb8YPP32CLnA8NT14zc9Cp87v6Xj1yWUl7N6hW=s68-c-k-c0x00ffffff-no-rj",
  //     videoThumbnailUrl: "https://i.ytimg.com/vi/kAaKFvwRoWc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrJc9_z48QLuIwBQf1wfgkcBaZKA"
  //   },
  //   {
  //     title: "Hell's Been Blessed | Hazbin Hotel S2 | Prime Video India",
  //     views: "2.8K",
  //     uploadDate: "14 hours ago",
  //     channel: "Prime Video India",
  //     channelProfileIconUrl: "https://yt3.ggpht.com/tV7mR48kz0fcbL4056L7S_pfqygwKrRQB1Rb8YPP32CLnA8NT14zc9Cp87v6Xj1yWUl7N6hW=s68-c-k-c0x00ffffff-no-rj",
  //     videoThumbnailUrl: "https://i.ytimg.com/vi/syDObbmPX1k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_jCEGcvmuwy2JJXME-ncCQWT0eQ"
  //   },
  //   {
  //     title: "Srikant Tiwari Made A Choice | The Family Man | Prime Video India",
  //     views: "11K",
  //     uploadDate: "1 day ago",
  //     channel: "Prime Video India",
  //     channelProfileIconUrl: "https://yt3.ggpht.com/tV7mR48kz0fcbL4056L7S_pfqygwKrRQB1Rb8YPP32CLnA8NT14zc9Cp87v6Xj1yWUl7N6hW=s68-c-k-c0x00ffffff-no-rj",
  //     videoThumbnailUrl: "https://i.ytimg.com/vi/JTnaTMjU3lg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVXGBzkQlKhxs_d-ijxySavLRwHA"
  //   }
  // ]

  videoData: Array<video> = []

  constructor(private dataService: DataService) { }

  // Subscribing to the data when Initialized.
  ngOnInit(): void {
    this.dataService.videoData$.subscribe(videoData => {
      this.videoData = videoData
    })
  }
}
