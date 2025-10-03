import { 
    Body, 
    Controller, 
    Param, 
    Post 
} from '@nestjs/common';
import { CreateOrderDTO } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { UserId } from '../decorators/user-id.decorator';

@Controller('order')
export class OrderController {

    constructor(
        private readonly orderService: OrderService
    ) {}

    @Post('/cart/:cartId')
    async createOrder(
        @Body() createOrderDTO: CreateOrderDTO,
        @Param('cartId') cartId: number,
        @UserId() userId: number,
    ) {
        return this.orderService.createOrder(createOrderDTO, cartId, userId);
    }
}
