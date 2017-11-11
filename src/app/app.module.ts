import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TelasComponent } from './components/telas/telas.component';
import { TelasModalComponent } from './components/telas-modal/telas-modal.component'

const appRoutes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'telas', component: TelasComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: '', component: AlunoComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: 'user', component: UserComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    PedidoComponent,
    AlunoComponent,
    UsuariosComponent,
    TelasComponent,
    TelasModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  //Don't forget to add the component to entryComponents section
  entryComponents: [
    TelasModalComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
