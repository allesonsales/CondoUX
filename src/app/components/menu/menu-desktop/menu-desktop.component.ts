import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-desktop',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-desktop.component.html',
  styleUrl: './menu-desktop.component.css',
})
export class MenuDesktopComponent {
  menuAberto: boolean = false;
  abrirMenu: string | null = null;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  toggleSubMenu(menu: string): void {
    this.abrirMenu = this.abrirMenu === menu ? menu : menu;
  }

  fecharSubMenu(): void {
    this.abrirMenu = null;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }
}
