import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { ReturnProduct } from './dtos/return-product.dto';
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDTO } from './dtos/create-product.dto';
import { DeleteResult } from 'typeorm';
import { UpdateProductDTO } from './dtos/update-product.dto';


@Roles(UserType.Admin, UserType.User)
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async findAll(): Promise<ReturnProduct[]> {
        return (await this.productService.findAll()).map(
            (product) => new ReturnProduct(product)
        ); 
    }
    @Roles(UserType.Admin)
    @Post()
    async createProduct(@Body() createProduct: CreateProductDTO,
    ): Promise<ProductEntity> {
        return this.productService.createProduct(createProduct);
    }

    @Roles(UserType.Admin)
    @Delete('/:productId')
    async deleteProduct(
        @Param('productId') productId: number,
    ): Promise<DeleteResult> {
        return this.productService.deleteProduct(productId);
    }

    @Roles(UserType.Admin)
    @Put('/:productId')
    async updateProduct(
        @Body() updateProduct: UpdateProductDTO,
        @Param('productId') productId: number,
    ): Promise<ProductEntity> {
        return this.productService.updateProduct(updateProduct, productId);
    }

}
