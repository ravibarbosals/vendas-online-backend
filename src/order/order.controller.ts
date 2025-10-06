import { 
    Body, 
    Controller, 
    Get, 
    Post 
} from '@nestjs/common';
import { CreateOrderDTO } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { UserId } from '../decorators/user-id.decorator';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async createOrder(
        @Body() createOrderDTO: CreateOrderDTO,
        @UserId() userId: number,
    ) {
        return this.orderService.createOrder(createOrderDTO, userId);
    }

    @Get()
    async findOrderByUserId(@UserId() userId: number) {
        return this.orderService.findOrdersByUserId(userId);
    }
}
