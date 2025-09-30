import { productMock } from "../../product/__mocks__/product.mocks";
import { InsertCartDTO } from "../dtos/insert-cart.dto";

export const insertCartMock: InsertCartDTO = {
    amount: 5847,
    productId: productMock.id,
}