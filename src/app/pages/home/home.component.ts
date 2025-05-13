import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrasesComponent } from './components/frases/frases.component';
import { SlideComponent } from './components/slide/slide.component';
import { InterfaceComponent } from './components/interface/interface.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FaqComponent } from './components/faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InicioComponent,
    InterfaceComponent,
    ServicosComponent,
    FaqComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
