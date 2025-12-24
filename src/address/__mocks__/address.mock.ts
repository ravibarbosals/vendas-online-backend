import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
    cep: '3445657',
    cityId: cityMock.id,
    complement: 'fsdfij',
    createdAt: new Date(),
    id: 74354,
    numberAddress: 543,
    updatedAt: new Date(),
    userId: userEntityMock.id,
}