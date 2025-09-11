import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddresDto } from './dtos/createAddress.dto';

@Injectable()
export class AddressService {

    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>,
    ) {}

    async createAddress(
        createAddressDto: CreateAddresDto, 
        userId: number,
    ): Promise<AddressEntity> {
        console.log('createAddressDto', createAddressDto);
        return this.addressRepository.save({
            ...createAddressDto,
            userId,
        });

    }

}
