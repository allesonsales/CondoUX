import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Servico {
  titulo: string;
  descricao: string;
  lista: string[];
  icone: string;
  link: string;
}

@Component({
  selector: 'app-servicos',
  imports: [CommonModule, RouterModule],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css',
})
export class ServicosComponent {
  servicos: Servico[] = [
    {
      titulo: 'Controle de acesso',
      descricao:
        'Monitore e autorize entradas com segurança e praticidade, garantindo o controle total do fluxo de pessoas no condomínio.',
      lista: [
        'Cadastro de moradores e visitantes',
        'Controle de veículos',
        'Leitura e cadastro facial',
        'QR Code de acesso temporário',
        'Registro de entrada e saída em tempo real',
        'Permissões por horário e local',
        'Notificações ao morador',
        'Histórico de acessos',
      ],
      icone: 'bi-lock',
      link: '/solucoes/controledeacesso',
    },
    {
      titulo: 'Gestão de correspondência',
      descricao:
        'Organize e registre entregas com eficiência, notificando os moradores sobre novas encomendas.',
      lista: [
        'Registro de correspondências e encomendas',
        'Assinatura digital no momento da retirada',
        'Notificação automática para o morador',
        'Controle por unidade e responsável pela entrega',
        'Histórico de recebimentos',
        'Filtro por data, status ou morador',
        'Alerta de encomendas não retiradas',
      ],
      icone: 'bi-envelope',
      link: '/solucoes/correspondencia',
    },
    {
      titulo: 'CFTV - Circuito Fechado de TV',
      descricao:
        'Monitore as áreas do condomínio em tempo real com câmeras integradas e gravações seguras.',
      lista: [
        'Monitoramento em tempo real',
        'Gravação contínua ou por movimento',
        'Acesso remoto via aplicativo',
        'Armazenamento em nuvem ou local',
        'Câmeras em áreas estratégicas do condomínio',
        'Histórico de gravações por data e hora',
        'Integração com alertas de segurança',
      ],
      icone: 'bi-camera',
      link: '/solucoes/cftv',
    },
    {
      titulo: 'Sem Parar',
      descricao:
        'Automatize o acesso de veículos com leitura automática de tags Sem Parar, sem precisar parar na portaria.',
      lista: [
        'Leitura automática de tags Sem Parar',
        'Abertura de portões sem contato',
        'Cadastro de veículos autorizados',
        'Controle de acesso por unidade',
        'Relatórios de entrada e saída',
        'Integração com histórico do morador',
        'Bloqueio remoto em caso de irregularidades',
      ],
      icone: 'bi-car-front',
      link: '/solucoes/semparar',
    },
  ];
}
