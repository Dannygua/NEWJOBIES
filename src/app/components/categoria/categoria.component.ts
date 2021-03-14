import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientenodeService } from 'src/app/service/clientenode.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  title:string="CATEGORIAS"
  categorias:any
  myFormCategoria!: FormGroup;
  constructor(public servc:ClientenodeService) { 

  }


  ngOnInit(): void {

    this.obtenerCategorias()
    this.myFormCategoria = new FormGroup({
      nombreF: new FormControl(''),

    }
    );
  }

  obtenerCategorias(){
        
  this.servc.getCategorias().subscribe((r)=>{ 
    console.log(r.categorias)
    this.categorias=r.categorias;

  }

  )
  }

  ingresarCategoria(){

    let nombre = this.myFormCategoria.value.nombreF;
        
    this.servc.addCategoria(nombre).subscribe((r) =>{
      this.obtenerCategorias()
      this.myFormCategoria = new FormGroup({
        nombreF: new FormControl(''),
      });

    });
    }

}
