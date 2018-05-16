import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule],
  exports: [MatToolbarModule, MatButtonModule]
})
export class MaterialDesignModule { }
