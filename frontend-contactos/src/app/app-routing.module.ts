import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ContactosAddComponent } from './components/contactos/contactos-add/contactos-add.component';
import { ContactosListComponent } from './components/contactos/contactos-list/contactos-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: 'contactos', pathMatch: 'full' },
    { path: 'contactos', component: ContactosComponent },
    { path: 'contactos/add', component: ContactosAddComponent},
    { path: 'contactos/:id/edit', component: ContactosAddComponent },
    { path: 'contactos/:id/delete', redirectTo: 'contactos' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
