import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn, switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {



    // this.activatedRoute.params.subscribe( ({id}) => {
    //   console.log(id);

    //   this.paisService.getPaisPorAlpha(id)
    //   .subscribe(pais =>{
    //     console.log(pais);
    //   })
    // });

    //mejor Forma de usar dos observables

    this.activatedRoute.params.
    pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),
      tap( console.log)
    )
      .subscribe( pais=> this.pais = pais
      );
  }

}
