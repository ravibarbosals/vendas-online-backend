import { Module, ValidationPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity])],
  providers: [CartService,
    {
        provide: APP_PIPE,
        useClass: ValidationPipe,
      },
    ],
  controllers: [CartController]
})
export class CartModule {}
