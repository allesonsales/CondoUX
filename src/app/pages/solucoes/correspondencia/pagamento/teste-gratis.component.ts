import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-gratis',
  imports: [CommonModule],
  templateUrl: './teste-gratis.component.html',
  styleUrl: './teste-gratis.component.css',
})
export class TesteGratisComponent {
  formaDePagamento: string = '';

  switchPagamento(event: Event): void {
    const selectElement = event?.target as HTMLSelectElement;
    this.formaDePagamento = selectElement.value;
  }
}
