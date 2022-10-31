import { Component } from '@angular/core';

@Component({
  selector: 'app-test-1',
  template: '<p class="container">Test 1 <router-outlet></router-outlet></p>',
  styles: [
    `.container {
      border: 1px solid black;
      padding: 1rem;
    }`,
  ],
})
export class Test1Component {}
