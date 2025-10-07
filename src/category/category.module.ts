import { forwardRef, Module, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { APP_PIPE } from '@nestjs/core';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]), 
    forwardRef(() => ProductModule),
  ],
  providers: [{
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
