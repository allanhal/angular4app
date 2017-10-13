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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.refreshPedidos()
    this.pedidoForm = {} as Pedido
  }

  refreshPedidos() {
    this.dataService.getApi('pedido').subscribe((pedidos) => {
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

}
