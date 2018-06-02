import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  bottomNav: boolean = true;
  isScrolled: boolean = false;
  // active menu items
  activeMenuItemHome: boolean = false;
  activeMenuItemServices: boolean = false;
  activeMenuItemAbout: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])

  ngOnInit() {
    if (location.hash === '#services') {
      this.activeMenuItemServices = true;
    }
    if (location.hash === '#about') {
      this.activeMenuItemAbout = true;
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
    location.replace('#' + id);
    this.activeMenuItemHome = false;
    this.activeMenuItemServices = false;
    this.activeMenuItemAbout = false;
  }
}
