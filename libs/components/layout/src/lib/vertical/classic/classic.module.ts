import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClassicLayoutComponent } from './classic.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ClassicLayoutComponent],
  exports: [ClassicLayoutComponent],
})
export class ClassicLayoutModule {}
