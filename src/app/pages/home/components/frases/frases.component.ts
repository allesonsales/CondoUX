import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css'], // <- Corrigido (era styleUrl)
})
export class FrasesComponent implements OnInit {
  beneficios = [
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
  beneficioAtual: { titulo: string; descricao: string } = {
    titulo: '',
    descricao: '',
  };

  beneficiosAtualIndex = 0;
  beneficioAtual = this.beneficios[0];

  ngOnInit(): void {
    setInterval(() => {
      this.beneficiosAtualIndex =
        (this.beneficiosAtualIndex + 1) % this.beneficios.length;
      this.beneficioAtual = this.beneficios[this.beneficiosAtualIndex];
      console.log(this.beneficioAtual);
    }, 2000);
  }
}
