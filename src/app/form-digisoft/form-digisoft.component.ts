import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { pedido } from '../model/servicio.model';

@Component({
  selector: 'form-digisoft',
  templateUrl: './form-digisoft.component.html',
  styleUrls: ['./form-digisoft.component.css']
})
export class FormDigisoftComponent implements OnInit {

private pedidocrear:pedido;
  constructor(private http:Http) {
     this.pedidocrear = new pedido();  
   }

  ngOnInit() {
  }
 public guardarpedido()
  {
    this.http.post(
      "http://tatan100.netai.net/pedido/pedido.php",
      this.pedidocrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('Pedido guardado con éxito');
      }      
      else{
        alert("Hubo un error al guardar el Pedido");
      }
    });

      
  }

}
