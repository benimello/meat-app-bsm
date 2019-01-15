import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'app/restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restauranteService: RestauranteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restauranteService
    .menuOfRestaurante(this.route.parent.snapshot.params['id'])

  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }
}