import { Component, OnInit } from '@angular/core';
import {RestauranteService} from '../restaurantes/restaurantes.service'
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html'
})
export class RestauranteDetalheComponent implements OnInit {
  restaurante: Restaurante

  constructor(private restaurantesService: RestauranteService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantesService.restauranteById(this.route.snapshot.params['id'])
    .subscribe(restaurante=>this.restaurante = restaurante)
  }

}
