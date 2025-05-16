import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sucesso',
  imports: [],
  templateUrl: './sucesso.component.html',
  styleUrl: './sucesso.component.css',
})
export class SucessoComponent {
  @Output() fechar = new EventEmitter<void>();

  onFechar() {
    this.fechar.emit();
  }
}
