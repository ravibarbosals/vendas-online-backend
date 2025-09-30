import { productMock } from "../../product/__mocks__/product.mocks";
import { UpdateCartDTO } from "../dtos/update-cart.dto copy";

export const updateCartMock: UpdateCartDTO = {
    amount: 5387,
    productId: productMock.id,
};