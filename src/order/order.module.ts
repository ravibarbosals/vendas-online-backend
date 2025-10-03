import { Module, ValidationPipe } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { PaymentModule } from '../payment/payment.module';
import { OrderProductModule } from '../order-product/order-product.module';
import { CartModule } from 'src/cart/cart.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity]), 
  PaymentModule, 
  CartModule, 
  OrderProductModule,
  ProductModule,
  ],
  controllers: [OrderController],
  providers: [OrderService,
        {
          provide: APP_PIPE,
          useClass: ValidationPipe,
        }]
})
export class OrderModule {}
