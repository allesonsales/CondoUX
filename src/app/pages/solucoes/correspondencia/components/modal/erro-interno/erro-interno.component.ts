import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-erro-interno',
  imports: [],
  templateUrl: './erro-interno.component.html',
  styleUrl: './erro-interno.component.css',
})
export class ErroInternoComponent {
  @Input() mensagem: string = '';

  @Output() fecharErroInterno = new EventEmitter<void>();

  fechar() {
    this.fecharErroInterno.emit();
  }
}
