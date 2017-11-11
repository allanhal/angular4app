import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import alertify from 'alertify.js';

@Component({
  selector: 'app-telas',
  templateUrl: './telas.component.html',
  styleUrls: ['./telas.component.css']
})
export class TelasComponent implements OnInit {

  telaForm: Tela
  telas: Tela[]
  telaFormChanged: boolean = false
  crud: string;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.refreshTelas()
    this.telaForm = {} as Tela
  }

  refreshTelas() {
    this.dataService.getAll('telas').subscribe((telas) => {
      this.telas = telas;
    })
  }

  clickRefresh() {
    this.refreshTelas();
  }

  clickEdit(tela) {
    this.telaForm = tela;
  }

  clickDelete(tela) {
    this.dataService.delete('telas', tela).subscribe((success) => {
      this.refreshTelas()
    })
  }

  clickClearTela() {
    this.telaForm = {} as Tela
  }

  clickSubmitTela() {
    // var method = "";
    // var id = this.telaForm.idusuarios;
    // if (id) {
    //   this.dataService.update('telas', this.telaForm).subscribe((tela) => {
    //     alertify.success("Tela atualizado.");
    //     this.refreshTelas()
    //   })

    // } else {
    console.log('this.telaForm', this.telaForm)
    this.dataService.update('telas', this.telaForm).subscribe((tela) => {
      alertify.success("Tela salvo.");
      this.refreshTelas()
    })
  }

}