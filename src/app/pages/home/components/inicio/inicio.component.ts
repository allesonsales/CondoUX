import { Component } from '@angular/core';
import { FrasesComponent } from '../frases/frases.component';
import { SlideComponent } from '../slide/slide.component';
import { ModalService } from '../../../../modal.services';

@Component({
  selector: 'app-inicio',
  imports: [SlideComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  constructor(private modalService: ModalService) {}

  abrirModal() {
    this.modalService.openModal(); // Abre o modal
  }

  fecharModal() {
    this.modalService.closeModal(); // Fecha o modal
  }
}
