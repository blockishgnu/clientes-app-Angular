import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { FormsModule } from '@angular/forms';
import { ClientesModule } from './clientes/clientes.module';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
  ClientesService
],
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  exports: [
  AltaClienteComponent,
  ListadoClientesComponent
]
})
export class ClientesModule { }
