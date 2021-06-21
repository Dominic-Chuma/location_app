import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Some middleware..
  const config = new DocumentBuilder()
    .setTitle('Eco-Location API')
    .setDescription(
      'This is a backend api that accepts and harnesses location information  ',
    )
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Middleware end......

  await app.listen(3000);
}
bootstrap();
