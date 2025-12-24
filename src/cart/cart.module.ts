import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartProductModule } from '../cart-product/cart-product.module';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartEntity } from './entities/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity]), CartProductModule],
  providers: [CartService,
    {
        provide: APP_PIPE,
        useClass: ValidationPipe,
      },
    ],
  controllers: [CartController],
  exports: [CartService]
})
export class CartModule {}
