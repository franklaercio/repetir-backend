import { BadRequestException } from '@nestjs/common';
export declare class EntidadeNaoExisteException extends BadRequestException {
    constructor(entidade: string, contexto: string);
}
