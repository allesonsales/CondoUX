import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuMobileComponent } from './components/menu/menu-mobile/menu-mobile.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuMobileComponent, HomeComponent, SobreComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'siteApp';
}
