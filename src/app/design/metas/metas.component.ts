import { Component, Input, OnInit } from '@angular/core';
import { Metas } from '../../core/models/metas';

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

  ngOnInit(): void {
    this.alcanzado = this.meta.completado/this.meta.meta * 100;
  }

}
