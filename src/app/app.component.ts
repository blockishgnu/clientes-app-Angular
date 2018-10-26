import { Component } from '@angular/core';
import { Cliente, Grupo } from './../cliente.model';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cliente aplicacion';
}
