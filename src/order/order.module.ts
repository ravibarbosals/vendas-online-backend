import { Module, ValidationPipe } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { PaymentModule } from 'src/payment/payment.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity]), PaymentModule],
  controllers: [OrderController],
  providers: [OrderService,
        {
          provide: APP_PIPE,
          useClass: ValidationPipe,
        }]
})
export class OrderModule {}
