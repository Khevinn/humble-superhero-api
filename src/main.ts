import { Logger, ValidationPipe } from '@nestjs/common';
import { SuperheroesModule } from './superheroes/superheroes.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(SuperheroesModule, { cors: true });
  const loggerService = app.get(Logger);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Humble Superhero API')
    .setDescription('API to manage superheroes with humility')
    .setVersion('1.0')
    .addTag('superheroes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT, () =>
    loggerService.log(
      `Application is running on http://localhost:${process.env.PORT}`,
      bootstrap.name,
    ),
  );
}
bootstrap();
