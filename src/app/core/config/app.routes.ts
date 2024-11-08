import { Routes } from '@angular/router';
import { ListarMetasComponent } from '../../components/listar-metas/listar-metas.component';
import { NuevoComponent } from '../../components/nuevo/nuevo.component';
import { ModalComponent } from '../../components/modal/modal.component';

export const routes: Routes = [
  {
    path: '',
    component: ListarMetasComponent,
  },
  {
    path: 'crear',
    component: NuevoComponent,
  },
  {
    path: 'editar',
    component: ModalComponent,
  },
];
