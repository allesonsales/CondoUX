import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  imports: [CommonModule],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.css'
})
export class MenuMobileComponent {
  menuAberto: boolean = false;
  abrirMenu: string | null = null;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  toggleSubMenu(menu: string): void {
    this.abrirMenu = this.abrirMenu === menu ? null : menu
  }

  fecharMenu(): void {
    this.menuAberto = false
  }

  logClicado(): void {
    console.log('clicou');
  }
}
