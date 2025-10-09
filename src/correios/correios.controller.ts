import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCep } from './dto/return-cep.dto';

@Controller('correios')
export class CorreiosController {
    constructor(
        private readonly correioService: CorreiosService) {}

    @Get('/:cep')
    async findAll(@Param('cep') cep: string): Promise<ReturnCep>{
        return this.correioService.findAddressByCep(cep);

    }
}
