import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../../modal.services';

@Component({
  selector: 'app-menu-desktop',
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-desktop.component.html',
  styleUrl: './menu-desktop.component.css',
})
export class MenuDesktopComponent {
  constructor(private modalService: ModalService) {}

  abrirModal() {
    this.modalService.openModal();
  }

  fecharModal() {
    this.modalService.closeModal();
  }

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
