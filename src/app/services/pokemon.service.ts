import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokebuildapi.fr/api/v1/pokemon';

  constructor(private http: HttpClient) {}

  // Fonction pour récupérer tous les Pokémon
  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  // Fonction pour récupérer un Pokémon par son ID
  getPokemonById(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }
}
