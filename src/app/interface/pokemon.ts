export interface PokemonType {
    name: string;
    image: string;
}
  
export interface PokemonStat {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}
  
export interface PokemonResistance {
    name: string;
    damage_multiplier: number;
    damage_relation: 'neutral' | 'resistant' | 'vulnerable' | 'twice_resistant';
}
  
export interface PokemonEvolution {
    name: string;
    pokedexId: number;
}
  
export interface Pokemon {
    id: number;
    pokedexId: number;
    name: string;
    image: string;
    imageUrl?: string;  // Ajout du champ imageUrl
    sprite: string;
    slug: string;
    stats: PokemonStat;
    apiTypes: PokemonType[];
    apiGeneration: number;
    apiResistances: PokemonResistance[];
    resistanceModifyingAbilitiesForApi: any[]; // Ce champ semble être un tableau vide dans ton exemple. Si des données spécifiques y sont ajoutées, tu pourrais ajuster le type ici.
    apiEvolutions: PokemonEvolution[];
    apiPreEvolution: string;
    apiResistancesWithAbilities: any[]; // Même chose pour ce champ.
}
  