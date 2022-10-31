import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
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
        canActivate: [
          (route: ActivatedRouteSnapshot) => {
            console.log(route.data);
            return true;
          },
        ],
        // children: [
        //   {
        //     path: 'route3',
        //     data: {
        //       value3: 3,
        //     },
        //     component: Test2Component,
        //     canActivate: [
        //       (route: ActivatedRouteSnapshot) => {
        //         console.log(route.data);
        //         return true;
        //       },
        //     ],
        //   },
        // ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
