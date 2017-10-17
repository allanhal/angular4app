import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import alertify from 'alertify.js';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunoForm: Aluno
  alunos: Aluno[]
  alunoFormChanged: boolean = false
  crud: string;

  constructor(private dataService: DataService) {
    this.crud = 'assets/crud.png'
  }

  ngOnInit() {

    this.refreshAlunos()
    this.alunoForm = {} as Aluno
  }

  refreshAlunos() {
    this.dataService.getAll('aluno').subscribe((alunos) => {
      this.alunos = alunos;
    })
  }

  clickRefresh() {
    this.refreshAlunos();
  }

  clickEdit(aluno) {
    this.alunoForm = aluno;
  }

  clickDelete(aluno) {
    this.dataService.delete('aluno', aluno).subscribe((success) => {
      this.refreshAlunos()
    })
  }

  clickClearAluno() {
    this.alunoForm = {} as Aluno
  }

  clickSubmitAluno() {
    var method = "";
    var id = this.alunoForm._id;
    if (id) {

      this.dataService.update('aluno', this.alunoForm).subscribe((aluno) => {
        alertify.success("Aluno atualizado.");
        this.refreshAlunos()
      })

    } else {
      this.dataService.save('aluno', this.alunoForm).subscribe((aluno) => {
        alertify.success("Aluno salvo.");
        this.refreshAlunos()
      })
    }

  }

}
