import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DetailComponent }]),
  ],
  declarations: [DetailComponent],
  exports: [DetailComponent],
})
export class DetailModule {}
