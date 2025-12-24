import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { Roles } from '../decorators/roles.decorator';
import { UserId } from '../decorators/user-id.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { CartService } from './cart.service';
import { InsertCartDTO } from './dtos/insert-cart.dto';
import { ReturnCartDTO } from './dtos/return-card.dto';
import { UpdateCartDTO } from './dtos/update-cart.dto copy';

@Roles(UserType.User, UserType.Admin, UserType.Root)
@Controller('cart')
export class CartController {
    constructor(
        private readonly cartService: CartService
    ) {}

    @Post()
    async createCart(
        @Body() insertCart: InsertCartDTO, 
        @UserId() userId: number,
    ): Promise<ReturnCartDTO> {
        return new ReturnCartDTO(
            await this.cartService.insertProductInCart(insertCart, userId)
        );
    }

    @Get()
    async findCartByUserId(@UserId() userId: number): Promise<ReturnCartDTO> {
        return new ReturnCartDTO(
            await this.cartService.findCartByUserId(userId, true));
    }

    @Delete()
    async clearCart(@UserId() userId: number): Promise<DeleteResult> {
        return this.cartService.clearCart(userId);
    }

    @Delete('/product/:productId')
    async deleteProductCart(
        @Param('productId') productId: number, 
        @UserId() userId: number,
    ): Promise<DeleteResult> {
        return this.cartService.deleteProductCart(productId, userId);
    }

    @Patch()
    async updateProductInCart(
        @Body() updateCartDto: UpdateCartDTO,
        @UserId() userId: number,
    ): Promise<ReturnCartDTO> {
        return new ReturnCartDTO(
            await this.cartService.updateProductInCart(updateCartDto, userId),
    );
    }
}
