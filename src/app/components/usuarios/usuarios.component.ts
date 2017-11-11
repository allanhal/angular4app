import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import alertify from 'alertify.js';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarioForm: Usuario
  usuarios: Usuario[]
  usuarioFormChanged: boolean = false
  crud: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.refreshUsuarios()
    this.usuarioForm = {} as Usuario
  }

  refreshUsuarios() {
    this.dataService.getAll('usuarios').subscribe((usuarios) => {
      this.usuarios = usuarios;
      this.usuarios.forEach(element => {
        this.dataService.getUnit('telas', element.idusuarios).subscribe((telas) => {
          element.telas = telas;
        })
      });
    })
  }

  clickRefresh() {
    this.refreshUsuarios();
  }

  clickEdit(usuario) {
    this.usuarioForm = usuario;
  }

  clickDelete(usuario) {
    this.dataService.delete('usuarios', usuario).subscribe((success) => {
      this.refreshUsuarios()
    })
  }

  clickClearUsuario() {
    this.usuarioForm = {} as Usuario
  }

  clickSubmitUsuario() {
    var method = "";
    var id = this.usuarioForm.idusuarios;
    if (id) {
      this.dataService.update('usuarios', this.usuarioForm).subscribe((usuario) => {
        alertify.success("Usuario atualizado.");
        this.refreshUsuarios()
      })

    } else {
      console.log('this.usuarioForm', this.usuarioForm)
      this.dataService.save('usuarios', this.usuarioForm).subscribe((usuario) => {
        alertify.success("Usuario salvo.");
        this.refreshUsuarios()
      })
    }
  }

}
