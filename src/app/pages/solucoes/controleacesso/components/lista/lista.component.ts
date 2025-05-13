import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-acesso',
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaAcessoComponent {
  funcionalidades: any[] = [
    {
      titulo: 'Controle de acesso',
      descricao:
        'Gerencie a entrada e saída de pessoas e veículos com máxima segurança e eficiência.',
      icone: 'bi-shield-lock',
    },
    {
      titulo: 'Pré-autorização de visitantes',
      descricao:
        'Autorize visitantes e prestadores com antecedência, facilitando o acesso e reforçando a segurança.',
      icone: 'bi-person-check',
    },
    {
      titulo: 'Notificações em tempo real',
      descricao:
        'Receba alertas de entrada, saída e autorizações via App, E-mail, SMS e WhatsApp.',
      icone: 'bi-bell',
    },
    {
      titulo: 'Registro de entregas',
      descricao:
        'Cadastre facilmente todas as encomendas recebidas no condomínio, com segurança e agilidade.',
      icone: 'bi-journal-check',
    },
    {
      titulo: 'Monitoramento de pânico',
      descricao:
        'Acione alertas de emergência via biometria ou aplicativo e garanta uma resposta rápida.',
      icone: 'bi-exclamation-triangle',
    },
    {
      titulo: 'Relatórios completos',
      descricao:
        'Tenha relatórios detalhados de acessos, acionamentos e desempenho da portaria.',
      icone: 'bi-bar-chart',
    },
    {
      titulo: 'Autenticação segura',
      descricao:
        'Ofereça múltiplas formas de autenticação: biometria, cartão, senha, tag veicular, facial e mais.',
      icone: 'bi-fingerprint',
    },
    {
      titulo: 'Acesso pelo aplicativo',
      descricao:
        'Moradores podem abrir portões e portas diretamente pelo celular, com segurança.',
      icone: 'bi-phone',
    },
  ];
}
