import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleHooks';

  message = "Hello";
  content = "Hello";
  hideChild = false;

  constructor() {
    console.log("AppComponent:Constructed");
  }
  
  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }
 
  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }
}
