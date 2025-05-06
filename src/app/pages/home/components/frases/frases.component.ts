import { Component } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
 beneficios = [
    {
      titulo: "Sistemas com Inteligência Artificial",
      descricao: "Automatização e análise de comportamentos para mais segurança."
    },
    {      
      titulo: "Monitoramento 24h",
      descricao: "Vigilância contínua com alertas em tempo real."
    },
    {
      titulo: "Integração com o Sem Parar",
      descricao: "Entrada rápida e sem contato para moradores e veículos autorizados."
    },
    {
      titulo:"Reconhecimento facial e leitura de placas",
      descricao: "Acesso seguro e ágil para moradores e visitantes."
    },
    {
      titulo: "Controle de acesso por aplicativo",
      descricao:"Autorize entradas, visualize registros e receba notificações pelo celular."
    }      
  ]

  beneficiosAtualIndex = 0
  beneficioAtual = this.beneficios[0]

 ngOnInit(): void {
  setInterval(() => {
    this.beneficioAtual = this.beneficios[this.beneficiosAtualIndex +1]
  }, 4000);
 }

}
