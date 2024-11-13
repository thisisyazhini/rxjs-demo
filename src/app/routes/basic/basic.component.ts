import { Component, ViewEncapsulation } from '@angular/core';
import { Subject, map, filter, take, of } from 'rxjs';

@Component({
  selector: '',
  templateUrl: './basic.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class BasicComponent {

  private _currentValue = 0;

  source = new Subject<number>();
  // source.next(2);

  sourceObservable = of(1,2,3,4,5);

  // sourceObservable2.subscribe(value => console.log(value));

  observable = this.source.pipe(
    filter(value => value % 2 === 0),
    map(value => value * 2),
    take(2)
  );

  public next() {
    this._currentValue = this._currentValue + 1;

    this.source.next(this._currentValue);
  }
}
