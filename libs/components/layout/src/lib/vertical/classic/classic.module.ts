import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationsModule } from '@app/navigations';
import { ClassicLayoutComponent } from './classic.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationsModule],
  declarations: [ClassicLayoutComponent],
  exports: [ClassicLayoutComponent],
})
export class ClassicLayoutModule {}
