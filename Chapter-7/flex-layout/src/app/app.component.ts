import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="parent" 
            fxLayout="row"
            fxLayout.lt-md="column">
      <div fxFlex="30%" class="left">Left</div>
      <div fxFlex="70%" class="right">Right</div>
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
