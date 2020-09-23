import {Component} from '@angular/core';

import { figures } from '../figures';

@Component({
  selector: 'app-figure-list',
  templateUrl: './figure-list.component.html',
  styleUrls: ['./figure-list.component.css']
})
export class FigureListComponent {
  figures = figures;
}
