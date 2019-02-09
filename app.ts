import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
})
export class App {
  heading: string;
  text: string;
  
  constructor() {
    this.heading = `Angular v${VERSION.full} + Bootstrap`;
    this.text = "On the other hand... I have some fingers.";
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {
}
