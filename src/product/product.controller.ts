import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ReturnProduct } from './dtos/return-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { ProductService } from './product.service';


@Roles(UserType.Admin, UserType.Root, UserType.User)
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async findAll(): Promise<ReturnProduct[]> {
        return (await this.productService.findAll([], true)).map(
            (product) => new ReturnProduct(product)
        ); 
    }
    @Roles(UserType.Admin, UserType.Root)
    @Post()
    async createProduct(@Body() createProduct: CreateProductDTO,
    ): Promise<ProductEntity> {
        return this.productService.createProduct(createProduct);
    }

    @Roles(UserType.Admin, UserType.Root)
    @Delete('/:productId')
    async deleteProduct(
        @Param('productId') productId: number,
    ): Promise<DeleteResult> {
        return this.productService.deleteProduct(productId);
    }

    @Roles(UserType.Admin, UserType.Root)
    @Put('/:productId')
    async updateProduct(
        @Body() updateProduct: UpdateProductDTO,
        @Param('productId') productId: number,
    ): Promise<ProductEntity> {
        return this.productService.updateProduct(updateProduct, productId);
    }

}
