import { Component, OnInit } from '@angular/core';
import { DrawService } from '../draw/draw.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor() { }
  private drawService: DrawService;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  openForm() {
  const stringToParse =  prompt('Input parameters of figure in format: line -p [50, 50] [100, 100] -c rgb(255, 0, 0). If you need to build several figures separate them with a symbol ;');
  const regex = new RegExp('(line|rectangle|triangle|circle|ellipse)(\\s-p)(\\s\\[\\d+,\\d+\\](\\s)*){1,4}((-r|-r1|-r2)\\s\\d(\\s)*){0,2}(-(c|b)\\s(rgb|rgba)\\(\\d+,\\d+,\\d+(,\\s(0[.]\\d+)|0|1)*\\)){0,2}(;)*');
  if (regex.test(stringToParse)) {
      const arrOfFigures: string[] = stringToParse.split(';');
      const arrForDrawing = this.drawService.getArrayOfFigures(arrOfFigures);
  }
  else {
    alert('Wrong input! Please try again.');
  }
  }

}
