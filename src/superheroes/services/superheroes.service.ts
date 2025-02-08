import { Injectable } from '@nestjs/common';
import { Superhero } from '../models/superheroes.model';
import { SuperheroesRepository } from '../repositories/superheroes.repository';

@Injectable()
export class SuperheroesService {
  constructor(private readonly superheroesRepository: SuperheroesRepository) {}

  create(superhero: Superhero) {
    return this.superheroesRepository.add(superhero);
  }

  findAll() {
    return this.superheroesRepository.getAll();
  }
}
