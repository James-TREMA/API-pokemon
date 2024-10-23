import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokebuildapi.fr/api/v1/pokemon';

  constructor(private http: HttpClient) {}

  // Fonction pour récupérer tous les Pokémon
  getAllPokemon(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
