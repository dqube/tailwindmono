import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconModule } from '@app/svg-icon';
import { SidebarMenuComponent } from './vertical/sidebar-menu/sidebar-menu.component';
import { SidebarSubmenuComponent } from './vertical/sidebar-submenu/sidebar-submenu.component';
import { SidebarComponent } from './vertical/sidebar/sidebar.component';
@NgModule({
  imports: [CommonModule, SvgIconModule, RouterModule],
  declarations: [
    SidebarMenuComponent,
    SidebarSubmenuComponent,
    SidebarComponent,
  ],
  exports: [SidebarComponent],
})
export class NavigationsModule {}
