import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interface/pokemon';  // Import de l'interface

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})

export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;  // Utilisation de l'interface

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonById(id).subscribe((data: Pokemon) => {  // Utilisation de l'interface
        this.pokemon = data;
      });
    }
  }
}
