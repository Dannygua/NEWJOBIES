import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HomeComponent } from './components/home/home.component';
import { AnimeComponent } from './components/anime/anime.component';

const routes: Routes = [

  {path: 'categoria', component: CategoriaComponent},
  
  {path: 'producto', component: ProductoComponent},

  {path: 'anime', component: AnimeComponent},
  
  {path: 'home', component: HomeComponent },
  
  {path: '**',  component: HomeComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
