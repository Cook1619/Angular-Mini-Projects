import { Injectable } from '@angular/core';

// @ Injectable makes it available in angular DI system
// By using 'root' we then don't need to put it in a providers array to tell angular it's available to use in that module
@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor() { }
}
