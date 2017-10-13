import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import '../../models/address'
import '../../models/pedido'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = 'John Doe'
  sexo: string = 'F'
  age: number
  email: string
  address: Address
  hobbies: string[]
  hello: any
  pedidos: Pedido[]
  isEdit: boolean = false

  constructor(private dataService: DataService) {
  }

  ngOnInit() {

    this.sexo = 'M'
    this.age = 30
    this.address = {
      street: 'Marcos Macedo',
      city: 'Fortaleza',
      state: 'CE'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music']
    this.hello = true


    this.dataService.getApi('pedido').subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }

  onClick() {
    this.name = 'Allan'
    this.hobbies.push('New hobby')
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby)
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit
  }

}