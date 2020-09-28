import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FigureListComponent} from './figure-list/figure-list.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import { FigureDetailsComponent } from './figure-details/figure-details.component';
import { RenderingComponent } from './rendering/rendering.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FigureListComponent,
    FigureDetailsComponent,
    RenderingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FigureListComponent },
      { path: 'figures/:figureID', component:
      FigureDetailsComponent },
      {path: 'rendering', component: RenderingComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
