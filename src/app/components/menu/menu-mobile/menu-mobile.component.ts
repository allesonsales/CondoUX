import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.css',
})
export class MenuMobileComponent {
  menuAberto: boolean = false;
  abrirMenu: string | null = null;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
    document.body.classList.add('no-scroll');
  }

  toggleSubMenu(menu: string): void {
    this.abrirMenu = this.abrirMenu === menu ? null : menu;
  }

  fecharMenu(): void {
    this.menuAberto = false;
    document.body.classList.remove('no-scroll');
  }

  logClicado(): void {
    console.log('clicou');
  }
}
