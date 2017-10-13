import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import alertify from 'alertify.js';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedidos: Pedido[]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.refreshPedidos()
  }

  refreshPedidos() {
    this.dataService.getApi('pedido').subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }

  clickRefresh() {
    this.refreshPedidos();
  }

  clickDelete(pedido) {
    this.dataService.delete('pedido', pedido).subscribe((success) => {
      console.log(success)
    })
  }

}
