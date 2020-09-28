import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// tslint:disable-next-line:class-name
class figure {
  name: string;
  point1: [ number, number];
  point2?: [ number, number];
  point3?: [ number, number];
  radius1?: number;
  radius2?: number;
  colour?: [number, number, number, number];
  backgroundColour?: [number, number, number, number];
  constructor(str: string) {
    let arr = str.split(' ', 2);
    this.name = arr[0];
    arr = arr[1].split(' ', 2);
    arr = arr[1].split(' ', 2);
    switch (this.name) {
      case 'circle': {
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'ellipse': {
        this.point1[0] = Number(arr[0].substr(1, arr[0].length - 2));
        arr = arr[1].split(' ',  2);
        this.point1[1] = Number(arr[0].substr(0, arr[0].length - 1));
        break;
      }
      case 'line': {
      }
      // tslint:disable-next-line:no-switch-case-fall-through
      case 'rectangle': {
        this.point1[0] = Number(arr[0].substr(1, arr[0].length - 2));
        arr = arr[1].split(' ',  2);
        this.point1[1] = Number(arr[0].substr(0, arr[0].length - 1));
        arr = arr[1].split(' ',  2);
        this.point2[0] = Number(arr[0].substr(1, arr[0].length - 2));
        arr = arr[1].split(' ',  2);
        this.point2[1] = Number(arr[0].substr(0, arr[0].length - 1));
        break;
      }
      case 'triangle': {
        this.point1[0] = Number(arr[0].substr(1, arr[0].length - 2));
        arr = arr[1].split(' ',  2);
        this.point1[1] = Number(arr[0].substr(0, arr[0].length - 1));
        arr = arr[1].split(' ',  2);
        this.point2[0] = Number(arr[0].substr(1, arr[0].length - 2));
        arr = arr[1].split(' ',  2);
        this.point2[1] = Number(arr[0].substr(0, arr[0].length - 1));
        arr = arr[1].split(' ',  2);
        this.point3[0] = Number(arr[0].substr(1, arr[0].length - 2));
        arr = arr[1].split(' ',  2);
        this.point3[1] = Number(arr[0].substr(0, arr[0].length - 1));
      }
    }
    switch (this.name) {
      case 'circle': {
        arr = arr[1].split(' ',  2);
        arr = arr[1].split(' ',  2);
        this.radius1 = Number(arr[0]);
        break;
      }
      case 'ellipse': {
        arr = arr[1].split(' ',  2);
        arr = arr[1].split(' ',  2);
        this.radius1 = Number(arr[0]);
        arr = arr[1].split(' ',  2);
        arr = arr[1].split(' ',  2);
        this.radius2 = Number(arr[0]);
        break;
      }
      default: {
      }
    }
    if (arr[1] !== '') {
      arr = arr[1].split(' ',  2);
      if (arr[0] === '-c') {
        arr = arr[1].split('(',  2);
        if (arr[0] === 'rgb') {
          arr = arr[1].split(', ',  2);
          this.colour[0] = Number(arr[0]);
          arr = arr[1].split(', ',  2);
          this.colour[1] = Number(arr[0]);
          arr = arr[1].split(')',  2);
          this.colour[2] = Number(arr[0]);
          arr = arr[1].split(' ',  2);
        }
        else {
          arr = arr[1].split(', ',  2);
          this.colour[0] = Number(arr[0]);
          arr = arr[1].split(', ',  2);
          this.colour[1] = Number(arr[0]);
          arr = arr[1].split(', ',  2);
          this.colour[2] = Number(arr[0]);
          arr = arr[1].split(')',  2);
          this.colour[2] = Number(arr[0]);
          arr = arr[1].split(' ',  2);
        }
      }
      // @ts-ignore
      if (arr[0] === '-b' && arr[0] !== '') {
        arr = arr[1].split('(',  2);
        if (arr[0] === 'rgb') {
          arr = arr[1].split(', ',  2);
          this.backgroundColour[0] = Number(arr[0]);
          arr = arr[1].split(', ',  2);
          this.backgroundColour[1] = Number(arr[0]);
          arr = arr[1].split(')',  2);
          this.backgroundColour[2] = Number(arr[0]);
        }
        else {
          arr = arr[1].split(', ',  2);
          this.backgroundColour[0] = Number(arr[0]);
          arr = arr[1].split(', ',  2);
          this.backgroundColour[1] = Number(arr[0]);
          arr = arr[1].split(', ',  2);
          this.backgroundColour[2] = Number(arr[0]);
          arr = arr[1].split(')',  2);
          this.backgroundColour[2] = Number(arr[0]);
        }
      }
    }
  }
}

export class DrawService {
  items = [];
  constructor() {
  }
  // tslint:disable-next-line:typedef
  getArrayOfFigures(fig: string[]) {
    // tslint:disable-next-line:prefer-const one-variable-per-declaration no-shadowed-variable
    if (fig.length !== 0) {
      // tslint:disable-next-line:prefer-const
      let arrayFigureToDraw: figure[];
      for (let i; i < fig.length; i++) {
        arrayFigureToDraw.push(new figure(fig[i]));
      }
      this.items = arrayFigureToDraw;
    }
    else {
      alert('Null input');
    }
  }
}



