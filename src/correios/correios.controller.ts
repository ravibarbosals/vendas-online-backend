import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCepExternal } from './dto/return-cep.-externaldto';

@Controller('correios')
export class CorreiosController {
    constructor(
        private readonly correiosService: CorreiosService) {}

    @Get('/:cep')
    async findAll(@Param('cep') cep: string): Promise<ReturnCepExternal> {
        return await this.correiosService.findAddressByCep(cep);
    }
}
