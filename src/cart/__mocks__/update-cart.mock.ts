import { productMock } from "../../product/__mocks__/product.mock";
import { UpdateCartDTO } from "../dtos/update-cart.dto copy";

export const updateCartMock: UpdateCartDTO = {
    amount: 5387,
    productId: productMock.id,
};