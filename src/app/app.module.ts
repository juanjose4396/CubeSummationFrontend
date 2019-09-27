import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { APP_ROUTES } from './app.route';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const ROUTES = [...APP_ROUTES];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
