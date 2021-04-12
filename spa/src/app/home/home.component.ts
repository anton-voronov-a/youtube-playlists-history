import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public started(): boolean {
    return window.history && window.history.length > 1 && location.href.indexOf(document.referrer) > -1;
  }
}
