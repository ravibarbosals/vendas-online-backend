import { Module } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { CorreiosController } from './correios.controller';
import { HttpModule } from '@nestjs/axios';
import { CityModule } from '../city/city.module';
import { SoapModule } from 'nestjs-soap';

@Module({
  imports: [
    SoapModule.register(
      { clientName: 'SOAP_CORREIOS', 
        //PODE TER ERRO NO URL
        uri: 'http://viacep.com.br/ws/01001000/json/',
      }),
    HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),
  CityModule,
],
  providers: [CorreiosService],
  controllers: [CorreiosController]
})
export class CorreiosModule {}
