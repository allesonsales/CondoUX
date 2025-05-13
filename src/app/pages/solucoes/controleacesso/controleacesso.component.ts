import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaAcessoComponent } from './components/lista/lista.component';
import { CommonModule } from '@angular/common';

interface Imagem {
  link: string;
}

@Component({
  selector: 'app-controleacesso',
  imports: [RouterModule, CommonModule, ListaAcessoComponent],
  templateUrl: './controleacesso.component.html',
  styleUrl: './controleacesso.component.css',
})
export class ControleacessoComponent {
  imagens: Imagem[] = [
    {
      link: 'assets/imagens/acesso/imagem1.jpg',
    },
  ];
}
