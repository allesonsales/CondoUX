import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FrasesComponent } from './components/frases/frases.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FrasesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
