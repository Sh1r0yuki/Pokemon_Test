export interface PokemonDetailsDto {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: ISprite;
  types: IType[];
  abilities: IAbility[];
  stats: IStat[];
}

export interface ISprite  {
  front_default: string;
};

export interface IType { type: IName };

export interface IAbility { ability: IName};

export interface IName { name: string };

export interface IStat {
  base_stat: number;
  effort: number;
  stat: IName;
};