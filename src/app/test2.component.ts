import { Component } from '@angular/core';

@Component({
  selector: 'app-test-2',
  template: '<p class="container">Test 2</p>',
  styles: [
    `.container {
      border: 1px solid black;
      padding: 1rem;
    }`,
  ],
})
export class Test2Component {}
