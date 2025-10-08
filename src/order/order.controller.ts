import { 
    Body, 
    Controller, 
    Get, 
    Param, 
    Post 
} from '@nestjs/common';
import { CreateOrderDTO } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { UserId } from '../decorators/user-id.decorator';
import { OrderEntity } from './entities/order.entity';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { ReturnOrderDTO } from './dto/return-order.dto';

@Roles(UserType.Admin, UserType.User)
@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async createOrder(
        @Body() createOrderDTO: CreateOrderDTO,
        @UserId() userId: number,
    ): Promise<OrderEntity> {
        return this.orderService.createOrder(createOrderDTO, userId);
    }

    @Get()
    async findOrderByUserId(@UserId() userId: number) {
        return this.orderService.findOrdersByUserId(userId);
    }
    @Roles(UserType.Admin)
    @Get('/all')
    async findAllOrders(): Promise<ReturnOrderDTO[]> {
        return (await this.orderService.findAllOrders()).map(
            (order) => new ReturnOrderDTO(order),
        );
    }
    @Roles(UserType.Admin)
    @Get('/:orderId')
    async findOrderById(@Param('orderId') orderId: number,
): Promise<ReturnOrderDTO[]> {
        return (await this.orderService.findOrdersByUserId(undefined, orderId)).map(
            (order) => new ReturnOrderDTO(order),
    );
            
    }
}
