import { Component } from '@angular/core';
import { NuevoComponent } from '../nuevo/nuevo.component';
import { Metas } from '../../core/models/metas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NuevoComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  metas: Metas;
  constructor(private activeRoute: ActivatedRoute) {
    const queryParams = this.activeRoute.snapshot.queryParams;
    this.metas = JSON.parse(queryParams['meta']) as Metas;
  }
}
