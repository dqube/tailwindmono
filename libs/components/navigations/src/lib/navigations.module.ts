import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconModule } from '@app/svg-icon';
import { SidebarMenuComponent } from './vertical/sidebar-menu/sidebar-menu.component';

@NgModule({
  imports: [CommonModule, SvgIconModule],
  declarations: [SidebarMenuComponent],
  exports: [SidebarMenuComponent],
})
export class NavigationsModule {}
