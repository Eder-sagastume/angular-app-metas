import { Injectable } from '@angular/core';
import { Metas } from '../core/models/metas';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class MetasService {
  metasMock: Metas[] = []

  valoresLocalStorage:any;
  constructor(private backendService: BackendService) {
    this.valoresLocalStorage = localStorage.getItem('metas');
    if (this.valoresLocalStorage === null) {
      this.actualizarLocalStorage()
    } else {
      const metasCrudas = localStorage.getItem('metas');
      const metasParseadas = JSON.parse(metasCrudas!);
      this.metasMock = metasParseadas;
    }
  }

  actualizarLocalStorage() {
    const dataJson = JSON.stringify(this.metasMock);
    localStorage.setItem('metas', dataJson);
  }

  obtenerMetas(): Metas[] {
    return this.metasMock;
  }

  crearMetas(meta: Metas) {
    this.metasMock.push(meta);
    this.actualizarLocalStorage()
  }

  actualizarMetas(metaActualizar: Metas) {
    const indice = this.metasMock.findIndex((meta) => meta.id === metaActualizar.id)
    if (indice === -1) {
      console.log('meta no encontrada')
    } else {
      this.metasMock[indice] = metaActualizar
      this.actualizarLocalStorage()
    }
  }

  eliminarMetas(metaActualizar: Metas) {
    const indice = this.metasMock.findIndex((meta) => meta.id === metaActualizar.id)
    if (indice === -1) {
      console.log('meta no encontrada')
    } else {
      this.metasMock.splice(indice, 1)
      this.actualizarLocalStorage()
    }
  }

  async obtenerMetasBack(): Promise<Metas[]> {
    return this.backendService.leerMetas()
  }

}
