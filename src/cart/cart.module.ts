import { Module, ValidationPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [CartService,
    {
          provide: APP_PIPE,
          useClass: ValidationPipe,
        },
  ],
  controllers: [CartController]
})
export class CartModule {}
