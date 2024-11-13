import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, map, pairwise } from 'rxjs';

@Component({
  selector: '',
  templateUrl: './value-manipulation.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ValueManipulationComponent {

  private savedValue = new BehaviorSubject(''); // initial value

  private savedValue$ = this.savedValue.asObservable().pipe(pairwise());

  currentSavedValue$ = this.savedValue$.pipe(map(value => value[1]));

  previousSavedValue$ = this.savedValue$.pipe(map(value => value[0]));

  form = this._formBuilder.group({
    name: ['', Validators.required],
  });


  preview = `// BehaviorSubject is used to store the last value
savedValue = new BehaviorSubject(''); // initial value

savedValue$ = this.savedValue.asObservable().pipe(pairwise());

currentSavedValue$ = this.savedValue$.pipe(map(value => value[1]));
previousSavedValue$ = this.savedValue$.pipe(map(value => value[0]));

// NOTE: None of the above is executed until the savedValue is updated
  `;

  constructor(private readonly _formBuilder: FormBuilder) { }

  save() {
    this.savedValue.next(this.form.value.name || '');
  }
}
