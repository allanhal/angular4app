import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  api: string = 'https://rest-on-demand.herokuapp.com/api/'

  constructor(public http: Http) {
    console.log('DataService connect')
  }

  getApi(type) {
    return this.http.get(this.api + type).map(res => res.json())
  }

  delete(type, pedido) {
    // this.http({
    //   method: 'DELETE',
    //   url: urlRoot + '/' + pedido._id
    // }).then(function successCallback(response) {
    //   alertify.success("Pedido deletado.");
    //   $scope.refreshPedidos()
    // }, function errorCallback(response) {
    //   alertify.error("Pedido não deletado.");
    //   $scope.refreshPedidos()
    // });
    console.log(this.api + type + pedido._id)
    // return this.http.delete(this.api + type + '/' + pedido._id).subscribe((ok) => { console.log(ok) });

    return this.http.delete(this.api + type + '/' + pedido._id)
      .map(success => success.status);
  }

}
