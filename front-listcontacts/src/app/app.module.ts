import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaComponent } from './components/lista/lista.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ContactosComponent } from './view/contactos/contactos.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




const appRoutes: Routes=[

  {path: '', component:InicioComponent},
  {path: 'Contactos', component:ListaComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaComponent,
    ContactosComponent,
    FormComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
