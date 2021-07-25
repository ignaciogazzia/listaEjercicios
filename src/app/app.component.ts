import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //Es el lenguaje base para los estilos. Aca se indica la URL de nuestro fichero de estilos .css
})
export class AppComponent {
  //Solo hay una propiedad que se llama title
  title = 'Lista de Ejercicios';
}
