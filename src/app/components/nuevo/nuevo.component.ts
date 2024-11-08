import { Component, inject, Input, OnChanges, SimpleChanges,} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Metas } from '../../core/models/metas';
import { MetasService } from '../../services/metas.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-nuevo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.scss'
})
export class NuevoComponent implements OnChanges{
  @Input()
  metasIng?: Metas;
  metaEnviar!: Metas;

  metasService = inject(MetasService);

  formularioDeMetas = new FormGroup({
    id: new FormControl(),
    detalles: new FormControl(),
    periodo: new FormControl(),
    eventos: new FormControl(),
    icono: new FormControl(),
    meta: new FormControl(),
    plazo: new FormControl(),
    completado: new FormControl(),
  });

  frecuencias = ["Día", "Semana", "Mes", "Año"];
  iconos = ["💻", "🏃", "📚", "✈️", "🌄", "🚴", "⚽"];

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.metasIng) {
      this.formularioDeMetas.setValue({
        id: this.metasIng.id,
        detalles: this.metasIng.detalles,
        periodo: this.metasIng.periodo,
        eventos: this.metasIng.eventos,
        icono: this.metasIng.icono,
        meta: this.metasIng.meta,
        plazo: this.metasIng.plazo,
        completado: this.metasIng.completado,
      });
    }
  }

  llenarMetasEnviar() {
    this.metaEnviar = {
      "id": this.metasIng? this.metasIng.id: Math.random().toString(),
      "detalles": this.formularioDeMetas.value.detalles!,
      "periodo": this.formularioDeMetas.value.periodo!,
      "eventos": this.formularioDeMetas.value.eventos!,
      "icono": this.formularioDeMetas.value.icono!,
      "meta": this.formularioDeMetas.value.meta!,
      "plazo": this.formularioDeMetas.value.plazo!,
      "completado": this.formularioDeMetas.value.completado!,
    }
  }

  subirFormulario() {
    this.llenarMetasEnviar();
    this.metasService.crearMetas(this.metaEnviar);
    this.router.navigate(['/']);
  }

  actualizarMetas() {
    this.llenarMetasEnviar();
    this.metasService.actualizarMetas(this.metaEnviar);
    this.router.navigate(['/']);
  }

  eliminarMetas() {
    this.llenarMetasEnviar();
    this.metasService.eliminarMetas(this.metaEnviar);
    this.router.navigate(['/']);
  }

}
