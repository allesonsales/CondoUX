import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ControleacessoComponent } from './pages/solucoes/controleacesso/controleacesso.component';
import { CorrespondenciaComponent } from './pages/solucoes/correspondencia/correspondencia.component';
import { LgpdComponent } from './pages/sobre/lgpd/lgpd.component';
import { TesteGratisComponent } from './pages/solucoes/correspondencia/pagamento/teste-gratis.component';
import { CftvComponent } from './pages/solucoes/cftv/cftv.component';
import { SuporteComponent } from './pages/suporte/suporte.component';
import { SempararComponent } from './pages/solucoes/semparar/semparar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre/institucional', component: SobreComponent },
  { path: 'sobre/lgpd', component: LgpdComponent },
  { path: 'solucoes/controledeacesso', component: ControleacessoComponent },
  { path: 'solucoes/correspondencia', component: CorrespondenciaComponent },
  { path: 'solucoes/correspondencia/teste', component: TesteGratisComponent },
  { path: 'solucoes/cftv', component: CftvComponent },
  { path: 'solucoes/semparar', component: SempararComponent },
  { path: 'suporte', component: SuporteComponent },
];
