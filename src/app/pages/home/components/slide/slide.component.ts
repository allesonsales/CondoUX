import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

interface ImageLink {
  link: string;
}

@Component({
  selector: 'app-slide',
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
})
export class SlideComponent {
  marcas: ImageLink[] = [
    {
      link: 'assets/imagens/tecnologia/came.png',
    },
    {
      link: 'assets/imagens/tecnologia/controlid.png',
    },
    {
      link: 'assets/imagens/tecnologia/dahua.png',
    },
    {
      link: 'assets/imagens/tecnologia/hikvision.png',
    },
    {
      link: 'assets/imagens/tecnologia/intelbras.png',
    },
    {
      link: 'assets/imagens/tecnologia/smartnest.png',
    },
  ];

  indexAtual = 0;

  proximo() {
    if (this.indexAtual < this.marcas.length) {
      this.indexAtual++;
    } else {
      this.indexAtual = 0;
    }
  }

  anterior() {
    if (this.indexAtual > 0) {
      this.indexAtual--;
    } else {
      this.indexAtual = this.marcas.length - 1;
    }
  }
}
