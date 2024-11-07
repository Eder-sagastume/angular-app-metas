import { Component, inject } from '@angular/core';
import { MetasComponent } from '../../design/metas/metas.component';
import { MetasService } from '../../services/metas.service';
import { Metas } from '../../core/models/metas';

@Component({
  selector: 'app-listar-metas',
  standalone: true,
  imports: [MetasComponent],
  templateUrl: './listar-metas.component.html',
  styleUrl: './listar-metas.component.scss'
})
export class ListarMetasComponent {

  metasService = inject(MetasService);
  listaDeMetas!: Metas [];

  constructor() {
    this.listaDeMetas = this.metasService.obtenerMetas();
  }

}
