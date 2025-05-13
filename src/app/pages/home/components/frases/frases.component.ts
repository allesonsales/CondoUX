import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Beneficio {
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-frases',
  imports: [CommonModule],
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css'],
})
export class FrasesComponent implements OnInit, OnDestroy {
  beneficios: Beneficio[] = [
    {
      titulo: 'Sistemas com Inteligência Artificial',
      descricao:
        'Automatização e análise de comportamentos para mais segurança.',
    },
    {
      titulo: 'Monitoramento 24h',
      descricao: 'Vigilância contínua com alertas em tempo real.',
    },
    {
      titulo: 'Integração com o Sem Parar',
      descricao:
        'Entrada rápida e sem contato para moradores e veículos autorizados.',
    },
    {
      titulo: 'Reconhecimento facial e leitura de placas',
      descricao: 'Acesso seguro e ágil para moradores e visitantes.',
    },
    {
      titulo: 'Controle de acesso por aplicativo',
      descricao:
        'Autorize entradas, visualize registros e receba notificações pelo celular.',
    },
  ];

  beneficiosAtualIndex = 0;
  beneficioAtual = this.beneficios[0];
  private intervaloId: any;

  ngOnInit(): void {
    this.intervaloId = setInterval(() => {
      this.beneficiosAtualIndex =
        (this.beneficiosAtualIndex + 1) % this.beneficios.length;
      this.beneficioAtual = this.beneficios[this.beneficiosAtualIndex];
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervaloId);
  }
}
