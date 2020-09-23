import { Component } from '@angular/core';

export interface FigureToDraw {
  name: string;
  point1: [ number, number];
  point2?: [ number, number];
  point3?: [ number, number];
  point4?: [ number, number];
  radius1?: number;
  radius2?: number;
  colour?: [number, number, number];
  backgroundColour?: [number, number, number, number];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public figuresToDraw = [
  //   {}
  // ]
}
