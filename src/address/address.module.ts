import { Module, ValidationPipe } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { UserModule } from '../user/user.module';
import { CityModule } from '../city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), UserModule, CityModule],
  controllers: [AddressController],
  providers: [{
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AddressService]
})
export class AddressModule {}