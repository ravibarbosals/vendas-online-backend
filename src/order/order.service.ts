import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDTO } from './dto/create-order.dto';
import { PaymentService } from '../payment/payment.service';
import { PaymentEntity } from '../payment/entities/payment.entity';
import { CartService } from '../cart/cart.service';
import { OrderProductService } from '../order-product/order-product.service';
import { ProductService } from '../product/product.service';
import { OrderProductEntity } from '../order-product/entities/order-product.entity';
import { CartEntity } from '../cart/entities/cart.entity';
import { ProductEntity } from '../product/entities/product.entity';

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
        private readonly paymentService: PaymentService,
        private readonly cartService: CartService,
        private readonly orderProductService: OrderProductService,
        private readonly productService: ProductService, 

    ) {}

    async saveOrder(
        createOrderDTO: CreateOrderDTO, 
        userId: number, 
        payment: PaymentEntity
    ): Promise<OrderEntity> {
        return this.orderRepository.save({
            addressId: createOrderDTO.addressId,
            date: new Date(),
            paymentId: payment.id,
            userId,
        });
    }

    async createOrderProductUsingCart(
        cart: CartEntity, 
        orderId: number, 
        products: ProductEntity[]
    ): Promise<OrderProductEntity[]> {
        return Promise.all(
            cart.cartProduct?.map((cartProduct) => 
            this.orderProductService.createOrderProduct(
                cartProduct.productId, 
                orderId,
                products.find((product) => product.id === cartProduct.productId)
                ?.price || 0,
                cartProduct.amount,
                ),
            ),
        );
    }

    async createOrder(
        createOrderDTO: CreateOrderDTO, 
        userId: number,
    ): Promise<OrderEntity> {
        const cart = await this.cartService.findCartByUserId(userId, true);
        const products = await this.productService.findAll(
            cart.cartProduct?.map((cartProduct) => cartProduct.productId),
        );

        const payment: PaymentEntity = await this.paymentService.createPayment(
            createOrderDTO,
            products,
            cart,
        );

        const order = await this.saveOrder(createOrderDTO, userId, payment); 

        await this.createOrderProductUsingCart(cart, order.id, products);

        await this.cartService.clearCart(userId);

        return order;
    }

    async findOrdersByUserId(userId: number) {
        const orders = await this.orderRepository.find({
            where: {
                userId,
            },
            relations: {
                address: true,
                ordersProduct: {
                    product: true,
                },
                payment: {
                    paymentStatus: true,
                },
            }
        });

        if (!orders || orders.length === 0) {
            throw new NotFoundException('Orders not found');
        }

        return orders;
    }
}
