import { cityMock } from '../../city/__mocks__/city.mock';
import { addressMock } from './address.mock';
import { CreateAddressDto } from '../dtos/createAddress.dto';

export const createAddressMock: CreateAddressDto = {
    cep:addressMock.cep,
    cityId: cityMock.id,
    complement: addressMock.complement,
    numberAddress: addressMock.numberAddress,
}