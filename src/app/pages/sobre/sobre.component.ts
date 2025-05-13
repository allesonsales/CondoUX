import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MissaoComponent } from './missao/missao.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [MissaoComponent, RouterModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css',
})
export class SobreComponent {}
