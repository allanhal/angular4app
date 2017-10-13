import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedidos: Pedido[]

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getApi('pedido').subscribe((pedidos) => {
      this.pedidos = pedidos;
    })

  }

}
