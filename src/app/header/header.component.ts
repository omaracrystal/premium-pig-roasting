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
  bottomNav: boolean = true;
  // active menu items
  activeMenuItemServices: boolean = false;
  activeMenuItemAbout: boolean = false;
  activeMenuItemHow: boolean = false;
  activeMenuItemContact: boolean = false;
  activeMenuItemTestimonials: boolean = false;

  constructor() { }

  ngOnInit() {
    if (location.hash === '#services') {
      this.activeMenuItemServices = true;
    }
    if (location.hash === '#about') {
      this.activeMenuItemAbout = true;
    }
    if (location.hash === '#how') {
      this.activeMenuItemHow = true;
    }
    if (location.hash === '#contact') {
      this.activeMenuItemContact = true;
    }
    if (location.hash === '#testimonials') {
      this.activeMenuItemTestimonials = true;
    }
  }

  goToRoute(id) {
    document.getElementById(id).scrollIntoView();
    location.replace('#'+ id);
    this.activeMenuItemServices = false;
    this.activeMenuItemAbout = false;
    this.activeMenuItemHow = false;
    this.activeMenuItemContact = false;
    this.activeMenuItemTestimonials = false;
  }
}
