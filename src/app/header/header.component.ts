import { Component, OnInit } from '@angular/core';

const LOGO = '/../../assets/images/logo.svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = LOGO;

  constructor() { }

  ngOnInit() {
  }

}
