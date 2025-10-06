import { PaymentType } from "src/payment-status/enums/payment-type.enum";
import { PaymentEntity } from "../entities/payment.entity";

export const paymentMock: PaymentEntity = {
    createdAt: new Date(),
    discount: 432,
    finalPrice: 64365.4,
    id: 54345,
    price: 32355.0,
    statusId: PaymentType.Done,
    updatedAt: new Date(),
    type: '',
};