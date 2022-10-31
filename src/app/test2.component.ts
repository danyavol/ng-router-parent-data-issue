import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-2',
  template: `<div class="container">
      Test 2
      <p>{{data$ | async | json}}</p>
    </div>`,
  styles: [
    `.container {
      border: 1px solid black;
      padding: 1rem;
    }`,
  ],
})
export class Test2Component {
  data$ = this.route.data;
  constructor(private route: ActivatedRoute) {}
}
