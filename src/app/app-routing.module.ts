import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './routes/basic/basic.component';
import { FormsComponent } from './routes/forms/forms.component';
import { ValueManipulationComponent } from './routes/value-manipulation/value-manipulation.component';
import { CachingComponent } from './routes/caching/caching.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  },
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'value-manipulation',
    component: ValueManipulationComponent,
  },
  {
    path: 'caching',
    component: CachingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
