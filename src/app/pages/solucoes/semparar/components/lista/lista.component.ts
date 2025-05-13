import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Beneficio {
  titulo: string;
  descricao: string;
  icone: string;
}

@Component({
  selector: 'app-lista-semparar',
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  beneficios: Beneficio[] = [
    {
      titulo: 'Acesso sem parar na portaria',
      descricao:
        'Moradores entram no condomínio sem precisar reduzir a velocidade ou interagir com o porteiro.',
      icone: 'bi-truck-front',
    },
    {
      titulo: 'Maior agilidade no fluxo de veículos',
      descricao:
        'Evita filas e congestionamentos, especialmente em horários de pico.',
      icone: 'bi-speedometer2',
    },
    {
      titulo: 'Mais segurança e controle',
      descricao:
        'Elimina o contato físico e garante registros automáticos de entrada e saída.',
      icone: 'bi-shield-lock',
    },
    {
      titulo: 'Tecnologia confiável e já conhecida',
      descricao:
        'Integração com uma plataforma amplamente usada e confiável, o que aumenta a aceitação entre os moradores.',
      icone: 'bi-stars',
    },
    {
      titulo: 'Experiência moderna para o morador',
      descricao:
        'Oferece conforto e conveniência, valorizando a infraestrutura do condomínio.',
      icone: 'bi-house-check',
    },
  ];
}
