import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule }   from '@angular/common/http';
import { UserService } from './user.service';
import { HoverDerective } from './hover.directive';
import { searchPipe } from './search.pipe';
import { FormsModule }   from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent} from './setup-page/setup-page.component';
import { RouterModule } from '@angular/router';

const routers = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDerective,
    searchPipe,
    HomePageComponent,
    SetupPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers),
  
  ],

  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule { }
