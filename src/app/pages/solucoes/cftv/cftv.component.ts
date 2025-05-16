import { Component, OnInit } from '@angular/core';
import { ListaCFTVComponent } from './components/lista/listacftv.component';
import { CommonModule } from '@angular/common';

interface Imagem {
  link: string;
}

@Component({
  selector: 'app-cftv',
  imports: [ListaCFTVComponent, CommonModule],
  templateUrl: './cftv.component.html',
  styleUrl: './cftv.component.css',
})
export class CftvComponent {
  imagens: Imagem[] = [
    {
      link: '/assets/imagens/cftv/imagem1.jpg',
    },
  ];
}
