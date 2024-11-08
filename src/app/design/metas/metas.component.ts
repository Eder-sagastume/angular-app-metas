import { Component, Input, OnInit } from '@angular/core';
import { Metas } from '../../core/models/metas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [],
  templateUrl: './metas.component.html',
  styleUrl: './metas.component.scss'
})
export class MetasComponent implements OnInit{
  @Input()
  meta!: Metas
  alcanzado!: number

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.alcanzado = this.meta.completado/this.meta.meta * 100;
  }

  editarMeta(meta:Metas) {
    const queryParams = JSON.stringify(meta);
    this.router.navigate(['/editar'], {queryParams: {meta:queryParams}});
  }

}
