/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../../menu.service';
import { MenuItem, SubMenuItem } from '../../navigation.type';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent implements OnInit {
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  public toggleMenu(subMenu: SubMenuItem) {
    console.log(subMenu);
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void {}
}
