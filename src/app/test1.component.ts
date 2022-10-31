import { Component } from '@angular/core';

@Component({
  selector: 'app-test-1',
  template: `<div class="container">
      Test 1 
      <router-outlet></router-outlet>
    </div>`,
  styles: [
    `.container {
      border: 1px solid black;
      padding: 1rem;
    }`,
  ],
})
export class Test1Component {}
