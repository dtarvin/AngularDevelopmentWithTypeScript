import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <h2>Observable events</h2>
    <input type="text" #stockSymbol placeholder="Enter Stock">
  `,
})
export class AppComponent implements AfterViewInit {
 
  @ViewChild('stockSymbol',{read:ElementRef,static:false})
  myInputField: ElementRef;

  ngAfterViewInit() {

    let keyup$ = fromEvent(this.myInputField.nativeElement, 'keyup');

    let keyupValue$ = keyup$
    .pipe(
      debounceTime(500),
      map(event => event['target'].value))
    .subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock: string) {

    console.log(`The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`);
  }
}
