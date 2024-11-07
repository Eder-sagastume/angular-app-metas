import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VinculosComponent } from '../../design/vinculos/vinculos.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, VinculosComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
