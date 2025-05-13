import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Pergunta {
  pergunta: string;
  resposta: string;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  perguntas: Pergunta[] = [
    {
      pergunta: 'Quais equipamentos necessários?',
      resposta:
        'Para ter acesso ao CondoUX é necessário apenas um computador conectado a internet.',
    },
    {
      pergunta: 'O sistema funciona em caso de queda de internet?',
      resposta:
        'Sim, o sistema conta com atualização de banco de dados a todo tempo, tornando a navegação off-line possível',
    },
    {
      pergunta:
        'Posso utilizar os dispositivos(Biometria/TAG/Facial) já existentes no meu condomínio?',
      resposta:
        'Sim, após uma visita técnica, podemos avaliar a integração com os dispositivos já existentes, diminuindo o custo para implantação.',
    },
    {
      pergunta: 'Posso usar a CondoUX em condomínios comerciais?',
      resposta:
        'Sim, o sistema é totalmente adaptável para condomínios residenciais, comerciais ou mistos.',
    },
    {
      pergunta: 'É possível receber suporte técnico fora do horário comercial?',
      resposta:
        'Sim, contamos com atendimento emergencial 24h para garantir o funcionamento contínuo do sistema.',
    },
  ];

  perguntaAberta: number | null = null;

  abrirResposta(index: number) {
    this.perguntaAberta = this.perguntaAberta === index ? null : index;
  }
}
