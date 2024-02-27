import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterestTabsComponent } from './components/interest-tabs/interest-tabs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InterestTabsComponent,
    SidebarComponent,
    TopbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // The constructor is important to define the dataService object
  constructor(private dataService: DataService) { }

  videoData:Array<video> = []

  ngOnInit(): void {
    this.videoData = [
      {
        title: "Natural Juice | Red Tender Coconut Sharbath | Healthy Juice",
        views: "28M",
        uploadDate: "9 months ago",
        channel: "Village Cooking channel",
        channelProfileIconUrl: "https://yt3.ggpht.com/4eEETdAR33227A9KRhQ1T4P2NyYReiZKMeaN_rZ8QZ1LSCLUudaggLhZ1C40RkDyw6SejAmW=s68-c-k-c0x00ffffff-no-rj",
        videoThumbnailUrl: "https://i.ytimg.com/vi/-TAWQtjh4w8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9H4oEXDflP0jVNCCUoIj7JHM5zg",
        isSubscribed: true
      },
      {
        title: "NZ vs AUS 3rd T20I Highlights",
        views: "2.2M",
        uploadDate: "1 day ago",
        channel: "Prime Video India",
        channelProfileIconUrl: "https://yt3.ggpht.com/tV7mR48kz0fcbL4056L7S_pfqygwKrRQB1Rb8YPP32CLnA8NT14zc9Cp87v6Xj1yWUl7N6hW=s68-c-k-c0x00ffffff-no-rj",
        videoThumbnailUrl: "https://i.ytimg.com/vi/kAaKFvwRoWc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrJc9_z48QLuIwBQf1wfgkcBaZKA",
        isSubscribed: false
      },
      {
        title: "Hell's Been Blessed | Hazbin Hotel S2 | Prime Video India",
        views: "2.8K",
        uploadDate: "14 hours ago",
        channel: "Prime Video India",
        channelProfileIconUrl: "https://yt3.ggpht.com/tV7mR48kz0fcbL4056L7S_pfqygwKrRQB1Rb8YPP32CLnA8NT14zc9Cp87v6Xj1yWUl7N6hW=s68-c-k-c0x00ffffff-no-rj",
        videoThumbnailUrl: "https://i.ytimg.com/vi/syDObbmPX1k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_jCEGcvmuwy2JJXME-ncCQWT0eQ",
        isSubscribed: true
      },
      {
        title: "Srikant Tiwari Made A Choice | The Family Man | Prime Video India",
        views: "11K",
        uploadDate: "1 day ago",
        channel: "Prime Video India",
        channelProfileIconUrl: "https://yt3.ggpht.com/tV7mR48kz0fcbL4056L7S_pfqygwKrRQB1Rb8YPP32CLnA8NT14zc9Cp87v6Xj1yWUl7N6hW=s68-c-k-c0x00ffffff-no-rj",
        videoThumbnailUrl: "https://i.ytimg.com/vi/JTnaTMjU3lg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVXGBzkQlKhxs_d-ijxySavLRwHA",
        isSubscribed: false
      }
    ]

    // Setting the data
    this.dataService.setData(this.videoData)
  }


  user = {
    name: "Salman Khan",
    profileImageUrl: "http://2.bp.blogspot.com/-pUJdrhSqMuk/USS0opBBxXI/AAAAAAAAbVc/t2KV65EEFhA/s1600/Salman-Khan-1.jpg"
  }

  trendingTopics: Array<String> = [
    "Trailers",
    "Tamil Cinema",
    "Wickets",
    "Dramedy",
    "Filmi",
    "Game Shows",
    "Live",
    "Birds",
    "Recently uploaded"
  ]
}
