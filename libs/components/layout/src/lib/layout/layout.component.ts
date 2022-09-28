import { Component } from '@angular/core';
import { Layout } from './layout.type';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  layout: Layout = 'classic';
}
