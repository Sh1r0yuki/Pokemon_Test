export interface PokemonListDto {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonLink[];
}

export interface PokemonLink {
  name: string;
  url: string;
}
