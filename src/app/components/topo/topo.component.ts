import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  imports: [CommonModule],
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.css',
})
export class TopoComponent implements OnInit {
  mostrarBotao: boolean = false;

  @HostListener('window:scroll', [])
  trocarBotao() {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 200) {
        this.mostrarBotao = true;
        console.log('mostrou', this.mostrarBotao, 'scroll', window.scrollY);
      }
    }
  }

  irTopo(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {}
}
