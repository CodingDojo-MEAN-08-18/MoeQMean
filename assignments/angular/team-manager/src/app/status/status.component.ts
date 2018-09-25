import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  currentStatus: string;
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/status/game/1') {
      this.currentStatus = 'Game 1';
    }
  }
  clickStatus(event: any) {
    console.log(event.path[0].innerText);
    this.currentStatus = event.path[0].innerText;
  }
}
