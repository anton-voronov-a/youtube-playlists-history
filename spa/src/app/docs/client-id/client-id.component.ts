import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-client-id',
  templateUrl: './client-id.component.html',
  styleUrls: ['./client-id.component.scss']
})
export class ClientIdComponent implements OnInit {

  constructor(activeRouter: ActivatedRoute, router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.showContents = activeRouter.children.length === 0;
      }

    });
  }
  public showContents: boolean = true;
  ngOnInit() {
  }

}
