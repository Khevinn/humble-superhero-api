import { Logger, Module } from '@nestjs/common';
import { SuperheroesService } from './services/superheroes.service';
import { SuperheroesController } from './controller/superheroes.controller';
import { SuperheroesRepository } from './repositories/superheroes.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [SuperheroesController],
  providers: [SuperheroesService, SuperheroesRepository, Logger],
})
export class SuperheroesModule {}
