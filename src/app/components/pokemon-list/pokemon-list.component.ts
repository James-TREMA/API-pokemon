import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../../interface/pokemon';  // Import de l'interface

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})

export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];  // Utilisation de l'interface
  searchTerm: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe((data: Pokemon[]) => {
      this.pokemons = data.map(pokemon => ({
        ...pokemon,
        imageUrl: pokemon.image  // Définir imageUrl comme étant égale à image
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