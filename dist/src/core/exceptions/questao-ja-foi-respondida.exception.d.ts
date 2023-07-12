import { BadRequestException } from '@nestjs/common';
export declare class QuestaoJaFoiRespondidaException extends BadRequestException {
    constructor(contexto: string);
}
