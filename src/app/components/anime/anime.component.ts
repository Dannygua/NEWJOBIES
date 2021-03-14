import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientenodeService } from 'src/app/service/clientenode.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  anime:any
  myFormAnime!: FormGroup;
  constructor(public servc:ClientenodeService) { }
  ngOnInit(): void {

    this.obtenerAnime()
    this.myFormAnime = new FormGroup({
      nombreF: new FormControl(''),

    }
    );
  }

  obtenerAnime(){
        
  this.servc.getAnime().subscribe((r)=>{ 
    console.log(r.categorias)
    this.anime=r.categorias;

  }

  )
  }

  ingresarAnime(){

    let nombre = this.myFormAnime.value.nombreF;
        
    this.servc.addAnime(nombre).subscribe((r) =>{
      this.obtenerAnime()
      this.myFormAnime = new FormGroup({
        nombreF: new FormControl(''),
      });

    });
    }

}
