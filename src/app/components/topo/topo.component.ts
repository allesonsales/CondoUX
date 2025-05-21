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
    if (window.scrollY > 100) {
      this.mostrarBotao = true;
    }
  }

  irTopo(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    console.log('TopoComponent inicializado');
    this.trocarBotao();
  }
}
