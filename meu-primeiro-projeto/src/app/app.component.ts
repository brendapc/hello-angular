import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-list></app-list> <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
