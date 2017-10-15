import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import alertify from 'alertify.js';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedidoForm: Pedido
  pedidos: Pedido[]
  pedidoFormChanged: boolean = false
  angular: string;
  crud: string;

  constructor(private dataService: DataService) { 
    this.angular = 'assets/angular.svg'
    this.crud = 'assets/crud.png'
  }

  ngOnInit() {
    this.refreshPedidos()
    this.pedidoForm = {} as Pedido
  }

  refreshPedidos() {
    this.dataService.getAll('pedido').subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }

  clickRefresh() {
    this.refreshPedidos();
  }

  clickEdit(pedido) {
    this.pedidoForm = pedido;
  }

  clickDelete(pedido) {
    this.dataService.delete('pedido', pedido).subscribe((success) => {
      this.refreshPedidos()
    })
  }

  clickClearPedido() {
    this.pedidoForm = {} as Pedido
  }

  clickSubmitPedido() {
    var method = "";
    var id = this.pedidoForm._id;
    if (id) {

      this.dataService.update('pedido', this.pedidoForm).subscribe((pedido) => {
        alertify.success("Pedido atualizado.");
        this.refreshPedidos()
      })

    } else {
      this.dataService.save('pedido', this.pedidoForm).subscribe((pedido) => {
        alertify.success("Pedido salvo.");
        this.refreshPedidos()
      })
    }

  }

}
