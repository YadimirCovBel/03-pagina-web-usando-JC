//importar modulos del rooter de angular
import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componetes

import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

//array de rutas

const appRoutes: Routes = [
    {path:'',component: 'HomeComponent'},
    {path:'zapatillas', component: 'ZapatillasComponent'},
    {path: 'videojuego', component: 'VideojuegoComponent'}
    {path: 'cursos', component: 'CursosComponent'}
    {path: **, component: 'HomeComponent'}
    //usamos el Json para 
    //indicar que ruta path por ejemplo contato
    //y luego el componente  que cargara cuando se ejecute esa ruta
]
