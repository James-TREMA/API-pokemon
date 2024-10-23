import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule,  RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})

export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  searchTerm: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe((data: any[]) => {
      this.pokemons = data.map(pokemon => ({
        ...pokemon,
        imageUrl: pokemon.image // Utilisation du champ "image" pour l'image principale
      }));
    });
  }  

  // Fonction pour filtrer les Pokémon selon le terme de recherche
  filteredPokemons() {
    if (!this.searchTerm) {
      return this.pokemons;
    }
    return this.pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}