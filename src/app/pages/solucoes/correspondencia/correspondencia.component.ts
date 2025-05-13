import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ListaCorrespondenciaComponent } from './components/lista/lista.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from '../../../modal.services';

interface Imagem {
  link: string;
}

@Component({
  selector: 'app-correspondencia',
  imports: [
    CommonModule,
    RouterModule,
    ListaCorrespondenciaComponent,
    ModalComponent,
  ],
  templateUrl: './correspondencia.component.html',
  styleUrl: './correspondencia.component.css',
})
export class CorrespondenciaComponent {
  imagens: Imagem[] = [
    {
      link: 'assets/imagens/correspondencia/imagem1.jpg',
    },
  ];
  constructor(private modalService: ModalService) {}

  abrirModal() {
    this.modalService.openModal();
    document.body.classList.add('no-scroll');
  }

  fecharModal() {
    this.modalService.closeModal();
    document.body.classList.remove('no-scroll');
  }
}
