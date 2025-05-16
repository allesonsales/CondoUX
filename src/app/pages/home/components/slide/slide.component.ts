import { Component, OnInit } from '@angular/core';
import { fadeAnimation, slideAnimation } from '../../../../animations';
import { CommonModule } from '@angular/common';

interface ImageLink {
  link: string;
  titulo: string;
  frase: string;
}

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  imports: [CommonModule],
  animations: [fadeAnimation, slideAnimation],
})
export class SlideComponent implements OnInit {
  fotos: ImageLink[] = [
    {
      titulo: 'Controle de acesso por aplicativo',
      frase:
        'Autorize entradas, visualize registros e receba notificações pelo celular.',
      link: 'assets/imagens/acesso.jpg',
    },
    {
      titulo: 'Sistemas com Inteligência Artificial',
      frase: 'Automatização e análise de comportamentos para mais segurança.',
      link: 'assets/imagens/ia.jpg',
    },
    {
      titulo: 'Monitoramento 24h',
      frase: 'Vigilância contínua com alertas em tempo real.',
      link: 'assets/imagens/monitoramento.jpg',
    },
    {
      titulo: 'Suporte 24x7',
      frase: 'Atendimento especializado disponível a qualquer hora.',
      link: 'assets/imagens/suporte.jpg',
    },
  ];

  indiceFoto = 0;

  intervaloId: any;

  fadeClass = 'animate__fadeIn';

  proximo(): void {
    this.trocarImagemComAnimacao(() => {
      this.indiceFoto = (this.indiceFoto + 1) % this.fotos.length;
      this.reiniciarTimer();
    });
  }

  anterior() {
    this.trocarImagemComAnimacao(() => {
      this.indiceFoto =
        (this.indiceFoto - 1 + this.fotos.length) % this.fotos.length;
    });
  }
  timerFoto(): void {
    this.intervaloId = setInterval(() => {
      this.proximo();
    }, 8000);
  }

  reiniciarTimer(): void {
    clearInterval(this.intervaloId);
    this.timerFoto();
  }

  trocarImagemComAnimacao(callback: () => void) {
    this.fadeClass = '';
    setTimeout(() => {
      callback();
      this.fadeClass = 'animate__fadeIn';
    }, 10);
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.timerFoto();
    }
  }
}
