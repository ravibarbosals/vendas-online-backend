import {
    Body,
    Controller,
    Get,
    Param,
    Post
} from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { UserId } from '../decorators/user-id.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { CreateOrderDTO } from './dto/create-order.dto';
import { ReturnOrderDTO } from './dto/return-order.dto';
import { OrderEntity } from './entities/order.entity';
import { OrderService } from './order.service';

@Roles(UserType.Admin, UserType.Root, UserType.User)
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
    @Roles(UserType.Admin, UserType.Root)
    @Get('/all')
    async findAllOrders(): Promise<ReturnOrderDTO[]> {
        return (await this.orderService.findAllOrders()).map(
            (order) => new ReturnOrderDTO(order),
        );
    }
    @Roles(UserType.Admin, UserType.Root)
    @Get('/:orderId')
    async findOrderById(@Param('orderId') orderId: number,
): Promise<ReturnOrderDTO> {
    return new ReturnOrderDTO(
        (await this.orderService.findOrdersByUserId(undefined, orderId))[0],
    );      
    }
}
