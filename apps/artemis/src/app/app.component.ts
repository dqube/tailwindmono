import { Component } from '@angular/core';
import { MenuService } from '@app/navigations';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'artemis';
  constructor(private menuService: MenuService) {
    this.menuService.loadMenus(Menu.pages);
  }
}
