import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa validação global ANTES de iniciar o servidor
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove campos que não estão no DTO
    forbidNonWhitelisted: true, // retorna erro se enviar algo a mais
    transform: true, // transforma tipos automaticamente
  }));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
