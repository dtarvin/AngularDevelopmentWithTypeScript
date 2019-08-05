import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="parent" fxLayout="row">
      <div fxFlex class="left">Left</div>
      <div fxFlex class="right">Right</div>
    </div>
  `,
  styles: [`
    .parent {height: 100px;}
    .left {background-color: cyan;}
    .right {background-color: yellow;}
  `]
})
export class AppComponent {
  title = 'flex-layout';
}
