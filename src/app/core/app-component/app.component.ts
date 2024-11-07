import { Component } from '@angular/core';
import { EncabezamientoComponent } from '../../layout/encabezamiento/encabezamiento.component';
import { PrincipalComponent } from '../../layout/principal/principal.component';
import { PieComponent } from '../../layout/pie/pie.component';
import { VinculosComponent } from '../../design/vinculos/vinculos.component';
import { NuevoComponent } from '../../components/nuevo/nuevo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EncabezamientoComponent, PrincipalComponent, PieComponent, VinculosComponent, NuevoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-metas';
}
