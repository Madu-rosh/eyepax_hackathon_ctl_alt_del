import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponentComponent, PostComponentComponent, CommentComponentComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
