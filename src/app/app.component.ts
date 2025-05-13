import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuMobileComponent } from './components/menu/menu-mobile/menu-mobile.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { MenuDesktopComponent } from './components/menu/menu-desktop/menu-desktop.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuMobileComponent,
    MenuDesktopComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'siteApp';
}
