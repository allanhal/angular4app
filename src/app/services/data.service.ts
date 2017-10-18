import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  url: string = 'https://rest-on-demand.herokuapp.com/'
  // url: string = 'http://localhost:5000/'
  // api: string = 'api/'
  api: string = 'sql/'
  urlApi: string

  constructor(public http: Http) {
    this.urlApi = this.url + this.api
  }

  getAll(type) {
    return this.http.get(this.urlApi + type).map(res => res.json())
  }

  getUnit(type, id) {
    return this.http.get(this.urlApi + type + '/' + id).map(res => res.json())
  }

  delete(type, pedido) {
    return this.http.delete(this.urlApi + type + '/' + pedido.idusuarios)
      .map(success => success.status);
  }

  update(type, pedido) {
    return this.http.put(this.urlApi + type + '/' + pedido.idusuarios, pedido)
      .map(res => res.json())
  }

  save(type, pedido) {
    return this.http.post(this.urlApi + type, pedido)
      .map(res => res.json())
  }

}
