import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from '../controller/superheroes.controller';
import { SuperheroesService } from '../services/superheroes.service';
import { SuperheroDto } from '../dto/superheroes.dto';
import { Superhero } from '../models/superheroes.model';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [
        {
          provide: SuperheroesService,
          useValue: {
            create: jest.fn().mockResolvedValue({} as Superhero),
            findAll: jest.fn().mockResolvedValue([] as Superhero[]),
          },
        },
      ],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  describe('POST /superheroes', () => {
    it('should create a new superhero', () => {
      const superheroDto: SuperheroDto = {
        name: 'Spider-Man',
        superpower: 'Wall Climbing',
        humilityScore: 9,
      };

      controller.create(superheroDto);

      expect(service.create).toHaveBeenCalledWith(superheroDto);
    });
  });

  describe('GET /superheroes', () => {
    it('should return a list of superheroes sorted by humility score', () => {
      const superheroes: Superhero[] = [
        { name: 'Spider-Man', superpower: 'Wall Climbing', humilityScore: 9 },
        {
          name: 'Iron Man',
          superpower: 'Genius Intelligence',
          humilityScore: 6,
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(superheroes as never);

      const result = controller.findAll();

      expect(result).toEqual(superheroes);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
