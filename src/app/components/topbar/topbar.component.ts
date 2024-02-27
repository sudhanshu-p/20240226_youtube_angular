import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  @Input() user = {
    name: "Error",
    profileImageUrl: ""
  }
  
  settingsMenuOpen = false

  toggleSettingsMenu () {
    this.settingsMenuOpen = !this.settingsMenuOpen
  }
}
