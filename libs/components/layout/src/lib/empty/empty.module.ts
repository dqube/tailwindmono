import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmptyLayoutComponent } from './empty.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmptyLayoutComponent],
  exports: [EmptyLayoutComponent],
})
export class EmptyLayoutModule {}
