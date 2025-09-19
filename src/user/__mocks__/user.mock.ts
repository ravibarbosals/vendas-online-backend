import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enum/user-type.enum";

export const userEntityMock: UserEntity = {
    cpf: '123445',
    createdAt: new Date(),
    email: 'emailmock@gmail.com',
    id: 43242,
    name: 'nameMock',
    password: 'largPassword',
    phone: '342345365',
    typeUser: UserType.User,
    updatedAt: new Date(),

}