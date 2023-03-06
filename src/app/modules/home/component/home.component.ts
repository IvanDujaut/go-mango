import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/core/config/constants/carousel.const';
import { CarouselResponse } from 'src/app/core/models/carousel/carousel-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public carouselData: CarouselResponse[] = CAROUSEL_DATA_ITEMS;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
