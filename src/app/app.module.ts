import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './routes/basic/basic.component';
import { FormsComponent } from './routes/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueManipulationComponent } from './routes/value-manipulation/value-manipulation.component';
import { CachingComponent } from './routes/caching/caching.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    FormsComponent,
    ValueManipulationComponent,
    CachingComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
