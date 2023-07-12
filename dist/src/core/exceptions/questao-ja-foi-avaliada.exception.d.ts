import { BadRequestException } from '@nestjs/common';
export declare class QuestaoJaFoiAvaliadaException extends BadRequestException {
    constructor(contexto: string);
}
