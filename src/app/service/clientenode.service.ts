import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';
import { Producto } from './Producto';
import { Anime } from './Anime';

@Injectable({
  providedIn: 'root'
})
export class ClientenodeService {

  URL:string = "https://demonodemongodb.herokuapp.com/api/categoria/";
  URLP:string = "https://demonodemongodb.herokuapp.com/api/producto/";
  URLA:string = "https://demonodemongodb.herokuapp.com/api/categoria/";
  constructor(private httpc:HttpClient) {
  

   }
   getCategorias(): Observable<Categoria>{
     return this.httpc.get<Categoria>(this.URL);
   }

   addCategoria(nombreF:string){
     let objetoCategoria = {nombre: nombreF}

     return this.httpc.post(this.URL,objetoCategoria);
   }


   editCategoria(nombreF:string, idCategoria:string){
    let obj = {nombre: nombreF}

    return this.httpc.put( `${this.URL}/${idCategoria}`,obj );
  }

  deleteCategoria( idCategoria:string){

    return this.httpc.delete( this.URL+idCategoria);
  }
   
  getCategoriaById( idCategoria:string){

    return this.httpc.get<Categoria>( this.URL+idCategoria);
  }
  
     getProducto(): Observable<Producto>{
     return this.httpc.get<Producto>(this.URLP);
   }

   addProducto(nombreF:string){
     let objetoCategoria = {nombre: nombreF}

     return this.httpc.post(this.URLP,objetoCategoria);
   }


   editProducto(nombreF:string, idCategoria:string){
    let obj = {nombre: nombreF}

    return this.httpc.put( `${this.URLP}/${idCategoria}`,obj );
  }

  deleteProducto( idCategoria:string){

    return this.httpc.delete( this.URLP+idCategoria);
  }
   
  getProductoById( idCategoria:string){

    return this.httpc.get<Producto>( this.URLP+idCategoria);
  }

  getAnime(): Observable<Anime>{
    return this.httpc.get<Anime>(this.URLA);
  }

  addAnime(nombreF:string){
    let objetoCategoria = {nombre: nombreF}

    return this.httpc.post(this.URLA,objetoCategoria);
  }


  editAnime(nombreF:string, idCategoria:string){
   let obj = {nombre: nombreF}

   return this.httpc.put( `${this.URLA}/${idCategoria}`,obj );
 }

 deleteAnime( idCategoria:string){

   return this.httpc.delete( this.URLA+idCategoria);
 }
  
 getAnimeById( idCategoria:string){

   return this.httpc.get<Anime>( this.URLA+idCategoria);
 }
}
