import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCepExternal } from './dto/return-cep-external.dto';

@Controller('correios')
export class CorreiosController {
    constructor(
        private readonly correioService: CorreiosService) {}

    @Get('/:cep')
    async findAll(@Param('cep') cep: string): Promise<ReturnCepExternal>{
        return this.correioService.findAddressByCep(cep);

    }
}
