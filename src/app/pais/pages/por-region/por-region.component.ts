import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    ` button {margin-right: 10px;}
    `]
})
export class PorRegionComponent {




  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva: string='';
  paises: Country[] =[];
  hayError : boolean = false;
  termino: string = '';

  constructor(private paisService: PaisService){}

  getClaseCSS( region:string) : string{
    return (region === this.regionActiva)
    ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion( region:string){
    this.regionActiva = region;

    this.paisService.buscarRegion(region)
    .subscribe(paises => this.paises = paises
    )
  }







}
