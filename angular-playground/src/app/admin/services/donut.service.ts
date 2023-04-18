import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';
import { HttpClient } from '@angular/common/http';

// @ Injectable makes it available in angular DI system
// By using 'root' we then don't need to put it in a providers array to tell angular it's available to use in that module
@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [];

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Donut[]>(`/api/donuts`);
    // return this.donuts;
  }

  findById(id: string) {
    return (
      this.donuts.find((donut: Donut) => donut.id === id) || {
        name: '',
        icon: '',
        price: 0,
        description: '',
      }
    );
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts);
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id);
    console.log(this.donuts);
  }
}
