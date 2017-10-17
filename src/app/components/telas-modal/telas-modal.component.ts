import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-telas-modal',
  templateUrl: './telas-modal.component.html',
  styleUrls: ['./telas-modal.component.css']
})
export class TelasModalComponent implements OnInit {

  telas: Tela[]

  ngOnInit() {
    this.dataService.getAll('telas').subscribe((telas) => {
      this.telas = telas;
    })
  }

  closeResult: string;

  constructor(private modalService: NgbModal, public dataService: DataService) { }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
