import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientenodeService } from 'src/app/service/clientenode.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  title:string="PRODUCTOS"

  producto:any
  myFormProducto!: FormGroup;
  constructor(public servc:ClientenodeService) { 

  }


  ngOnInit(): void {

    this.obtenerProducto()
    this.myFormProducto = new FormGroup({
      nombreF: new FormControl(''),

    }
    );
  }

  obtenerProducto(){
        
  this.servc.getProducto().subscribe((r)=>{ 
    console.log(r.productos)
    this.producto=r.productos;

  }

  )
  }

  ingresarProducto(){

    let nombre = this.myFormProducto.value.nombreF;
    let disponible = this.myFormProducto.value.disponibleF;
    let precioUni = this.myFormProducto.value.precioUniF;

    this.servc.addProducto(nombre).subscribe((r) =>{
      this.obtenerProducto()
      this.myFormProducto = new FormGroup({
        nombreF: new FormControl(''),
        disponibleF: new FormControl(''),
        precioUniF: new FormControl(''),
      });

    });
    }

}
