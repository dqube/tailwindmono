import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ListComponent }]),
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListModule {}
