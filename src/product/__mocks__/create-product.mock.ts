import { categoryMock } from "../../category/__mocks__/category.mocks";
import { CreateProductDTO } from "../dtos/create-product.dto";

export const createProduct: CreateProductDTO = {
    categoryId: categoryMock.id ,
    image: 'idjifsuasidd',
    name: 'name mock product',
    price: 25.0,
}