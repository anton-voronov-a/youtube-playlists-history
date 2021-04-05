import { Component, HostListener } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostListener('window:resize', [])
  onResize() {
    this.update();
  }

  constructor() {
    this.update();
  }

  public isWide!: boolean;

  private update() {
    this.isWide = window.innerWidth > 1500;
  }

  public tryToggle(nav: MatDrawer) {
    if (!this.isWide) {
      nav.toggle(false);
    }
  }

}
