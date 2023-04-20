import { Component ,ViewChild} from '@angular/core';
import {MathjaxComponent} from './mathjax/mathjax.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(MathjaxComponent) childView: MathjaxComponent;

  name = 'Mathjax '; 
  mathContent = `When $ a \\ne 0 $, there are two solutions to \\(ax^2 + bx + c = 0 \\) and they are
$$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$`
}
