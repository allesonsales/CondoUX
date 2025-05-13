import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-correspondencia',
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaCorrespondenciaComponent {
  funcionalidades: any[] = [
    {
      titulo: 'Registro de entregas',
      descricao:
        'Cadastre facilmente todas as encomendas recebidas no condomínio, com segurança e agilidade.',
      icone: 'bi-journal-check',
    },
    {
      titulo: 'Notificações automáticas',
      descricao:
        'Avise os moradores assim que uma entrega chegar, mantendo todos sempre informados.',
      icone: 'bi-bell',
    },
    {
      titulo: 'Histórico de entregas',
      descricao:
        'Acompanhe todas as entregas com um histórico completo para consultas rápidas.',
      icone: 'bi-clock-history',
    },
    {
      titulo: 'Relatórios detalhados',
      descricao:
        'Gere relatórios completos para uma gestão eficiente e transparente das entregas.',
      icone: 'bi-file-earmark-text',
    },
  ];
}
