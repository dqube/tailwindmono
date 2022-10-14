import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../menu.service';
import { SubMenuItem } from '../../navigation.type';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss'],
})
export class SidebarSubmenuComponent {
  @Input() public submenu = <SubMenuItem>{};
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
  }

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
