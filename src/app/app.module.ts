import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { MatGridListModule, MatSelectModule} from '@angular/material';

// SERVICE
import { HpService } from './hp/hp.service';
// COMPONENTS
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteService } from './favorite/favorite.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
    // MatGridListModule,
    // MatSelectModule
  ],
  providers: [
    HpService,
    FavoriteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }