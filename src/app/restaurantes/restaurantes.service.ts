import {Restaurante} from './restaurante/restaurante.model'
import {MEAT_API} from '../app.api'
import {Injectable} from '@angular/core'
import {Http} from  '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestauranteService {
  
    constructor(private http: Http){  
   
    }
    restaurantes() : Observable<Restaurante[]>{
      return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
    }

    restauranteById(id: string): Observable<Restaurante>{
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)    
    }
}