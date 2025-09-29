import { Module, ValidationPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { APP_PIPE } from '@nestjs/core';
import { CartProductModule } from 'src/cart-product/cart-product.module';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity]), CartProductModule],
  providers: [CartService,
    {
        provide: APP_PIPE,
        useClass: ValidationPipe,
      },
    ],
  controllers: [CartController]
})
export class CartModule {}
