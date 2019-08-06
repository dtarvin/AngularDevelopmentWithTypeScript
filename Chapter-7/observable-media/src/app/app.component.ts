import { Component } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h3>Watch the breakpoint activation messages in the console.</h3>    
    <span *ngIf="showExtras$ | async">
      Showing extra info on medium screens
    </span>
  `,
  styles: []
})
export class AppComponent {
  showExtras$: Observable<boolean>;
  
  constructor(private media: ObservableMedia) {
    this.showExtras$ = this.media.asObservable()
      .pipe(map(mediaChange => {
        console.log(mediaChange.mqAlias);
        return mediaChange.mqAlias === 'md'? true : false;
      }));
  }
}
