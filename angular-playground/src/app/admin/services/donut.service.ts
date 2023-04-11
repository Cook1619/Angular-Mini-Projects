import { Injectable } from '@angular/core';
import { Donut } from "../models/donut.model";

// @ Injectable makes it available in angular DI system
// By using 'root' we then don't need to put it in a providers array to tell angular it's available to use in that module
@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [
    {
      id: 'as1234',
      name: 'Chocolate',
      icon: 'just-chocolate',
      price: 119,
      description: 'For chocolate lovers',
      promo: 'new'
    },
    {
      id: 'adsd234',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 129,
      description: 'Perfect for all',
      promo: 'limited'
    },
    {
      id: 'as1456hgf4',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate with caramel swirl',
    },
    {
      id: 'as14dd245',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 139,
      description: 'For the sour lovers',
      promo: 'limited'
    },
    {
      id: 'as6775dd245',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 139,
      description: 'Delicious lemon donut',
      promo: 'new'
    }
  ]
  constructor() { }

  findAll(){
    return this.donuts;
  }

  findById(id: string){
    return this.donuts.find((donut: Donut) => donut.id === id) || {name: '', icon: '', price: 0, description: '' };
  }
}
