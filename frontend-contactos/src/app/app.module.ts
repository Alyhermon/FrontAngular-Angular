import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';

import { NgxMaskModule} from 'ngx-mask';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ContactosAddComponent } from './components/contactos/contactos-add/contactos-add.component';
import { ContactosListComponent } from './components/contactos/contactos-list/contactos-list.component';
import { TelephoneFormatPipe } from './pipes/telephone-format.pipe';

import { 
  FontAwesomeModule, 
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faPenToSquare,
  faTrashCan,
  faCirclePlus,
  faGear
} from '@fortawesome/free-solid-svg-icons';




@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContactosAddComponent,
    ContactosListComponent,
    TelephoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPenToSquare,
      faTrashCan,
      faCirclePlus,
      faGear
    )
  }
}
