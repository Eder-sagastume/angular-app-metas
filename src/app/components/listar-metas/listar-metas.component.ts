import { Component, inject, OnInit } from '@angular/core';
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
export class ListarMetasComponent implements OnInit{

  metasService = inject(MetasService);
  listaDeMetas: Metas [];
  listaDeMetasBack?: Metas [];

  constructor() {
    this.listaDeMetas = this.metasService.obtenerMetas();
  }

  ngOnInit(): void {
    this.metasService.obtenerMetasBack().then((valorObtenido: Metas[]) => {
      this.listaDeMetasBack = valorObtenido;
    })
  }

}
