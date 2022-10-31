import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';

const routes: Routes = [
  {
    path: 'route1',
    data: {
      value1: 1,
    },
    component: Test1Component,
    children: [
      {
        path: 'route2',
        data: {
          value2: 2,
        },
        component: Test2Component,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
