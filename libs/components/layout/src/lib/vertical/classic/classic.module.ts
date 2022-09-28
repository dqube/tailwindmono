import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClassicLayoutComponent } from './classic.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ClassicLayoutComponent],
  exports: [ClassicLayoutComponent],
})
export class ClassicLayoutModule {}
