import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.scss'
})
export class NuevoComponent {
  formularioDeMetas = new FormGroup({
    id: new FormControl(),
    detalles: new FormControl(),
    periodo: new FormControl(),
    eventos: new FormControl(),
    icono: new FormControl(),
    meta: new FormControl(),
    plazo: new FormControl(),
    completado: new FormControl(),
  })
}
