import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InterfaceComponent } from './components/interface/interface.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FaqComponent } from './components/faq/faq.component';
import { TopoComponent } from '../../components/topo/topo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InicioComponent,
    InterfaceComponent,
    ServicosComponent,
    FaqComponent,
    TopoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
