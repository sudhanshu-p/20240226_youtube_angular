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
  videoData: Array<video> = []

  constructor(private dataService: DataService) { }

  // Subscribing to the data when Initialized.
  ngOnInit(): void {
    this.dataService.videoData$.subscribe(videoData => {
      this.videoData = videoData
    })
  }
}
