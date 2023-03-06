import { Component, Input, OnInit } from '@angular/core';

import { CarouselResponse } from '../../../core/models/carousel/carousel-response';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  /**
   * Custom propities for carousel --> propiedades que vienen 
   * directamente del padre que van a utilizar el component
   * como son componentes que vienen de un padre o de una
   * vista vamos a usar input
   */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: CarouselResponse[] = [];

  /**
   * vamos a crear nuestros finals properties, es decir,
   * a traves de las propiedades vamos a ir calculando
   * ciertas cosas
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor() {
    this.finalHeight = this.isFullScreen? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
      /**
       * vamos a mapear los items
       * porque por defecto no necesito el id, yo
       * le tengo que asignar el id porque al final el
       * movimiento de cada uno de los elementos tiene
       * que saber en que posicion se encuentran
       */
      this.items.map((item, index) => {
        item.id = index;
        item.marginLeft = 0;
      });
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    const foundItem = this.items.find(item => item.id === 0);
    if (foundItem) {
      foundItem.marginLeft = -100 * position;
    }
    //this.items && this.items.find(item => item.id === 0).marginLeft = -100 * position;
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100*nextPosition;
    } else {
      nextPosition = 0;
    }
    const foundItem = this.items.find(item => item.id === 0);
    if (foundItem) {
      foundItem.marginLeft = finalPercentage;
    }
    //this.items.find(item => item.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    const foundItem = this.items.find(item => item.id === 0);
    if (foundItem) {
      foundItem.marginLeft = finalPercentage;
    }
    this.currentPosition = backPosition;

  }

}
