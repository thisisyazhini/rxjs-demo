import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, map, startWith } from 'rxjs';

@Component({
  selector: '',
  templateUrl: './forms.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FormsComponent {

  form = this._formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  formData = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map(value => JSON.stringify({ ...value, password: value.password ? "*** (redacted)" : "" }, null, 2))
  );

  debouncedFormData = this.formData.pipe(debounceTime(500));

  preview = `// Reactive forms use rxjs internally for reactivity
form = this._formBuilder.group({
  name: ['', Validators.required],
  password: ['', Validators.required],
});

// Manipulate form data on the fly
formData = this.form.valueChanges.pipe(
  startWith(this.form.value), // initial value since valueChanges won't emit initial value
  map(value => JSON.stringify({ ...value, password: value.password ? "*** (redacted)" : "" }, null, 2))
);

// Useful for features like auto-save, auto-complete, etc.
debouncedFormData = this.formData.pipe(debounceTime(500));`;

  constructor(private readonly _formBuilder: FormBuilder) { }
}
