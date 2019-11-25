import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public listImg: Array<any> = [];


  // OWL-CAROUSEL
  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<span>LLL</span>', '<span>RRR</span>'],
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  };


  constructor() { }

  ngOnInit() {
    this.listImg = [
      {titleImg: 'imagen1', srcImg: '../../../assets/images/mazda-1.jpeg'},
      {titleImg: 'imagen2', srcImg: '../../../assets/images/mazda-2.jpeg'},
      {titleImg: 'imagen3', srcImg: '../../../assets/images/mazda-3.jpeg'},
      {titleImg: 'imagen4', srcImg: '../../../assets/images/mazda-4.jpeg'},
      {titleImg: 'imagen5', srcImg: '../../../assets/images/mazda-5.jpeg'},
    ];
  }

}
