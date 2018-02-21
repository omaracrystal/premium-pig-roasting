import { Component, OnInit } from '@angular/core';

const LOGO_PIG = '/../../assets/images/logo-pig.svg';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logoPig = LOGO_PIG;

  constructor() { }

  ngOnInit() {
  }

}
