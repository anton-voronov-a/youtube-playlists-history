import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

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

  public navigated: number = 0;

  constructor(router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.navigated++;
      }
    });
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
