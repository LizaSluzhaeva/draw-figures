import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openForm() {
  const stringToParse =  prompt('Input parameters of figure in format: line -p [50, 50] [100, 100] -c rgb(255, 0, 0)');
  }

}
