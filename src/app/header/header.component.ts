import { Component, OnInit } from '@angular/core';

const LOGO = '/../../assets/images/logo.svg';
const LOGO_MOBILE = '/../../assets/images/mobile-logo.svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = LOGO;
  mobileLogo = LOGO_MOBILE;

  constructor() { }

  ngOnInit() {
  }

}
