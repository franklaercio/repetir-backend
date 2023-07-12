"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestaoJaFoiRespondidaException = void 0;
const common_1 = require("@nestjs/common");
class QuestaoJaFoiRespondidaException extends common_1.BadRequestException {
    constructor(contexto) {
        super({
            codigo: 'QUESTAO_JA_FOI_RESPONDIDA',
            mensagem: `A questão já foi respondida [contexto: ${contexto}]`,
        });
    }
}
exports.QuestaoJaFoiRespondidaException = QuestaoJaFoiRespondidaException;
//# sourceMappingURL=questao-ja-foi-respondida.exception.js.map