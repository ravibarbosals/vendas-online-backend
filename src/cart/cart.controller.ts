import { Body, Controller, Post } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { CartEntity } from './entities/cart.entity';
import { InsertCartDTO } from './dtos/insert-cart.dto';
import { CartService } from './cart.service';
import { UserId } from 'src/decorators/user-id.decorator';

@Roles(UserType.User, UserType.Admin)
@Controller('cart')
export class CartController {
    constructor(
        private readonly cartService: CartService
    ) {}

    @Post()
    async createCart(
        @Body() insertCart: InsertCartDTO, 
        @UserId() userId: number,
    ): Promise<CartEntity> {
        return this.cartService.insertProductInCart(insertCart, userId);
    }
}
