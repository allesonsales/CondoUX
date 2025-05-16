import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-erro',
  imports: [CommonModule],
  templateUrl: './erro.component.html',
  styleUrl: './erro.component.css',
})
export class ErroComponent {
  @Output() fecharErro = new EventEmitter<void>();

  onFecharErro() {
    this.fecharErro.emit();
  }
}
