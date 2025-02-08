import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from '../services/superheroes.service';
import { SuperheroDto } from '../dto/superheroes.dto';
import { Superhero } from '../models/superheroes.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('superheroes')
@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  create(@Body() superheroDto: SuperheroDto): Superhero {
    return this.superheroesService.create(superheroDto);
  }

  @Get()
  findAll(): Superhero[] {
    return this.superheroesService.findAll();
  }
}
