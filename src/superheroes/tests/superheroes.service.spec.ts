import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from '../services/superheroes.service';
import { SuperheroesRepository } from '../repositories/superheroes.repository';
import { Superhero } from '../models/superheroes.model';

describe('SuperheroesService', () => {
  let service: SuperheroesService;
  let repository: SuperheroesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuperheroesService,
        {
          provide: SuperheroesRepository,
          useValue: {
            add: jest.fn(),
            getAll: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
    repository = module.get<SuperheroesRepository>(SuperheroesRepository);
  });

  describe('create', () => {
    it('should create a new superhero', async () => {
      const superhero: Superhero = {
        name: 'Spider-Man',
        superpower: 'Wall Climbing',
        humilityScore: 9,
      };

      jest.spyOn(repository, 'add').mockResolvedValue(superhero as never);

      const result = await service.create(superhero);

      expect(repository.add).toHaveBeenCalledWith(superhero);
      expect(result).toEqual(superhero);
    });
  });

  describe('findAll', () => {
    it('should return a list of superheroes', async () => {
      const superheroes: Superhero[] = [
        { name: 'Spider-Man', superpower: 'Wall Climbing', humilityScore: 9 },
        {
          name: 'Iron Man',
          superpower: 'Genius Intelligence',
          humilityScore: 6,
        },
      ];

      jest.spyOn(repository, 'getAll').mockResolvedValue(superheroes as never);

      const result = await service.findAll();

      expect(repository.getAll).toHaveBeenCalled();
      expect(result).toEqual(superheroes);
    });
  });
});
