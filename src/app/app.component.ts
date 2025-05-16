import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuMobileComponent } from './components/menu/menu-mobile/menu-mobile.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { MenuDesktopComponent } from './components/menu/menu-desktop/menu-desktop.component';
import { TopoComponent } from './components/topo/topo.component';
import { ModalService } from './modal.services';
import { ModalComponent } from './pages/solucoes/correspondencia/components/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuMobileComponent,
    MenuDesktopComponent,
    FooterComponent,
    TopoComponent,
    ModalComponent,
    ModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'siteApp';
  constructor(private modalService: ModalService) {}

  abrirModal() {
    this.modalService.openModal();
    document.body.classList.add('no-scroll');
  }

  fecharModal() {
    this.modalService.closeModal();
    document.body.classList.remove('no-scroll');
  }
}
