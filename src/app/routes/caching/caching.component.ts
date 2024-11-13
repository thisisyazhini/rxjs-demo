import { Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

type DataFormat = { time: string, randomValue: number } | null;

@Component({
  selector: '',
  templateUrl: './caching.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CachingComponent {

  private _data = new BehaviorSubject<DataFormat>(null);

  data$ = this._data.asObservable().pipe(filter(value => value !== null));


  preview = `private _data = new BehaviorSubject<DataFormat>(null);
data$ = this._data.asObservable().pipe(filter(value => value !== null));

fetchServiceData(force: boolean) {
  // fetch new data
  if (force || this._data.value === null) {
    setTimeout(() => {
      this._data.next({
        time: new Date().toLocaleTimeString(),
        randomValue: Math.random() * 100
      })
    }, 500);
  }
}`;

  fetchServiceData(force: boolean = false) {
    if (force || this._data.value === null) {
      // fetch new data

      setTimeout(() => {
        this._data.next({
          time: new Date().toLocaleTimeString(),
          randomValue: Math.random() * 100
        })
      }, 500);
    }
  }
}
