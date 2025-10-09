import { ReturnCepExternal } from "./return-cep-external.dto";

export class ReturnCep {
    cep: string;
    publicPlace: string;
    complement: string;
    neighnorhood: string;
    city: string;
    uf: string;
    ddd: string;
    cityId?: number;
    stateId?: number

    constructor(returnCep: ReturnCepExternal, cityId: number, stateId: number) {
        this.cep = returnCep.cep;
        this.publicPlace = returnCep.logadouro;
        this.complement = returnCep.complemento;
        this.neighnorhood = returnCep.bairro;
        this.city = returnCep.localidade;
        this.uf = returnCep.uf;
        this.ddd = returnCep.ddd;
        this.cityId = cityId;
        this.stateId = stateId;
    }
}