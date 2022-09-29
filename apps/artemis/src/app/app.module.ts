import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/layout';
import { SvgIconModule } from '@app/svg-icon';
import { AngularSvgIconPreloaderModule } from '@app/svg-icon/pre-loader';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'classic',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/booking/shell').then((m) => m.ShellModule),
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'booking',
        loadChildren: () =>
          import('@app/booking/shell').then((m) => m.ShellModule),
      },
    ],
  },
];
// const routerConfig: ExtraOptions = {
//   // preloadingStrategy       : PreloadAllModules,
//   scrollPositionRestoration: 'enabled'
// };
@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    SvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/json/icons.json',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DashboardComponent],
})
export class AppModule {}
