import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-missao',
  imports: [CommonModule],
  templateUrl: './missao.component.html',
  styleUrl: './missao.component.css'
})
export class MissaoComponent {
  ativo: string|null = 'missao';

  setAtivo(item: string): void {
    this.ativo = item
  }
}
