import { Component, inject, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokemonDetailsDto } from '../../models/pokemon-details-dto.interface'; // Adjust the import path as needed
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-details',
  imports: [AsyncPipe,CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  private readonly pokemonService = inject(PokemonsService);
  private readonly route = inject(ActivatedRoute);

  public pokemonId = this.route.snapshot.params?.['id'];
  public pokemonDetails$: Observable<PokemonDetailsDto> = this.pokemonService.getDetails(this.pokemonId);

  ngOnInit(): void {
    console.log('Pokemon ID:', this.pokemonId);
  }
}
