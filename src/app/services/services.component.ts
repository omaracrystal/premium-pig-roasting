import { Component, OnInit } from '@angular/core';
import { Service } from 'service';

const SERVICES = [
  {
    id: 1,
    title: 'Pick Me Up',
    subtitle: 'We prep it. <strong>We cook it.</strong> <span class="highlight">You pick it up.</span><br>It is ready jto be carved and served!',
    description: 'It\'s the <span class="highlight">"Easy Carve"</span> which means that the meat of the pig is <strong>pre-boned</strong> making it a breeze to carve & serve yourself!',
    img: '/../../assets/images/pick-me-up.jpg',
    price: '$10 per lb'
  },
  {
    id: 2,
    title: 'Bring it On',
    subtitle: 'We prep it. <strong>We cook it.</strong> <span class="highlight">We Deliver it.</span><br>We serve it buffet style!',
    description: 'The pig is <strong>pre-boned</strong> and <strong>pre-stuffed</strong> with a <span class="highlight">homemade sausage recipe stuffing</span>, one of Bill\'s secret recipes that the critics are raving about.',
    img: '/../../assets/images/bring-it-on.jpg',
    price: '$10/lb <span class="plus">+</span> Mileage'
  },
  {
    id: 3,
    title: 'The Whole 9 Yards',
    subtitle: 'We prep it. <strong>We cook it on site.</strong> <span class="highlight">We serve you from start to finish!</span>',
    description: 'The typical roast time is about six hours. This <strong>popular</strong> option allows for your guests to <span class="highlight">enjoy the entire pig roasting experience</span> which adds to the festive occasion.',
    img: '/../../assets/images/whole-9-yards.jpg',
    price: '$10/lb <span class="plus">+</span> Service'
  }
];

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {
  services = SERVICES;


  constructor() { }

  ngOnInit() {

  }

}
