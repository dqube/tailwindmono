import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        loadChildren: async () =>
          (await import('@app/booking/list')).ListModule,
      },
      {
        path: 'list',
        pathMatch: 'full',
        loadChildren: async () =>
          (await import('@app/booking/list')).ListModule,
      },
      {
        path: 'detail',
        pathMatch: 'full',
        loadChildren: async () =>
          (await import('@app/booking/detail')).DetailModule,
      },
    ]),
  ],
})
export class ShellModule {}
