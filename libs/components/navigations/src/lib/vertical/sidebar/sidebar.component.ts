import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../menu.service';
import { MenuItem } from '../../navigation.type';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();

  constructor(private menuService: MenuService) {
    // this.menuService.pagesMen(Menu.pages)
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
