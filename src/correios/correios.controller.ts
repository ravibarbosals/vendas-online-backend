import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';

@Controller('correios')
export class CorreiosController {
    constructor(
        private readonly correioService: CorreiosService) {}

    @Get('/:cep')
    async findAll(@Param('cep') cep: string): Promise<any>{
        return this.correioService.findAddressByCep(cep);

    }
}
