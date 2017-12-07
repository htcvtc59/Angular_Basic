import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { StructComponent } from './struct/struct.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';
import { CardComponent } from './card/card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ServiceweatherComponent } from './serviceweather/serviceweather.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    StructComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    ViewchildParentComponent,
    ViewchildChildComponent,
    CardComponent,
    LearnPipeComponent,
    CustomPipeComponent,
    ServiceweatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
