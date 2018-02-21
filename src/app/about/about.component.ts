import { Component, OnInit } from '@angular/core';

const ABOUT_IMG = '/../../assets/images/about.jpg';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  aboutImg = ABOUT_IMG;

  constructor() { }

  ngOnInit() {
  }
}
