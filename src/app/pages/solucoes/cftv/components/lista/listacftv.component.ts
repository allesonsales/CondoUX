import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listacftv',
  imports: [CommonModule],
  templateUrl: './listacftv.component.html',
  styleUrl: './listacftv.component.css',
})
export class ListaCFTVComponent {
  funcionalidades: any[] = [
    {
      nome: 'Tecnologia de Ponta',
      descricao:
        'Utilização dos mais modernos equipamentos e câmeras de alta definição, garantindo imagens nítidas e clareza em qualquer condição de iluminação.',
      icone: 'bi bi-gear',
    },
    {
      nome: 'Soluções Personalizadas',
      descricao:
        'Projetos sob medida, desenvolvidos de acordo com as necessidades específicas de cada cliente, seja para pequenos espaços ou grandes empreendimentos.',
      icone: 'bi bi-wrench',
    },
    {
      nome: 'Monitoramento Remoto',
      descricao:
        'Acesso em tempo real ao sistema de CFTV de qualquer lugar, a qualquer momento, por meio de plataformas seguras e intuitivas.',
      icone: 'bi bi-phone',
    },
    {
      nome: 'Inteligência Artificial',
      descricao:
        'Aplicação de IA para detecção de movimento, reconhecimento facial e alertas automáticos, aumentando a eficiência e precisão do monitoramento.',
      icone: 'bi bi-robot',
    },
    {
      nome: 'Armazenamento Seguro',
      descricao:
        'Soluções de armazenamento em nuvem ou locais, com backup constante e alta segurança, garantindo integridade dos dados.',
      icone: 'bi bi-hdd',
    },
    {
      nome: 'Suporte Técnico 24/7',
      descricao:
        'Atendimento especializado e suporte técnico disponível a qualquer hora, com rapidez e eficiência na resolução de problemas.',
      icone: 'bi bi-moon',
    },
  ];
}
