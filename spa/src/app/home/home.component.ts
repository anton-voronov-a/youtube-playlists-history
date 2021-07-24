import { Component } from '@angular/core';
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ShareComponent } from "../share/share.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private bottomSheet: MatBottomSheet) {
  }

  public share(): void {
    this.bottomSheet.open(ShareComponent);
  }
}
