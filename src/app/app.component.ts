import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { pedido } from './model/servicio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pedidoList:Array<pedido> = new Array<pedido>();

  constructor(private http:Http){
  
}
listarPedido(){
    this.http
    .get("http://tatan100.netai.net/pedido/pedido.php")
    .subscribe((response)=>{
      this.pedidoList = response.json();
      console.log(this.pedidoList);
      let listaPedido = document.getElementById("listaPedido");
     });            
  }

}