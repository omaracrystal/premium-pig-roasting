import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

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
  isScrolled: boolean = false;
  // active menu items
  activeMenuItemServices: boolean = false;
  activeMenuItemAbout: boolean = false;
  activeMenuItemHow: boolean = false;
  activeMenuItemContact: boolean = false;
  activeMenuItemTestimonials: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])

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

  onWindowScroll() {
    const scrollTopHeight = document.body.scrollTop || 0;
    console.log('scroll ding dong');

    if(scrollTopHeight > 200) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  scrollToTop() {
    this.document.body.scrollTop = 0;
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
