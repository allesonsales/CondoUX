import { Component } from '@angular/core';
import { ListaComponent } from './components/lista/lista.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-semparar',
  imports: [CommonModule, ListaComponent],
  templateUrl: './semparar.component.html',
  styleUrl: './semparar.component.css',
})
export class SempararComponent {}
