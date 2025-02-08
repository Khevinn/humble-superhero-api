import { Injectable } from '@nestjs/common';
import { Superhero } from '../models/superheroes.model';

@Injectable()
export class SuperheroesRepository {
  private superheroes: Superhero[] = [];

  add(superhero: Superhero): Superhero {
    this.superheroes.push(superhero);
    this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
    return superhero;
  }

  getAll(): Superhero[] {
    return this.superheroes;
  }
}
