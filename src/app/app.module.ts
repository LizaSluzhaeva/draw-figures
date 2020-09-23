import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FigureListComponent} from './figure-list/figure-list.component';
import {TopBarComponent} from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FigureListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: FigureListComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
