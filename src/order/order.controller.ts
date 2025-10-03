import { 
    Body, 
    Controller, 
    Param, 
    Post 
} from '@nestjs/common';
import { CreateOrderDTO } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

    constructor(
        private readonly orderService: OrderService
    ) {}

    @Post('/cart/:cartId')
    async createOrder(
        @Body() createOrderDTO: CreateOrderDTO,
        @Param('cartId') cartId: number,
    ) {
        return this.orderService.createOrder(createOrderDTO, cartId);
    }
}
