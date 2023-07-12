"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestaoJaFoiAvaliadaException = void 0;
const common_1 = require("@nestjs/common");
class QuestaoJaFoiAvaliadaException extends common_1.BadRequestException {
    constructor(contexto) {
        super({
            codigo: 'QUESTA_JA_FOI_AVALIADA',
            mensagem: `A questão já foi avaliada [contexto: ${contexto}]`,
        });
    }
}
exports.QuestaoJaFoiAvaliadaException = QuestaoJaFoiAvaliadaException;
//# sourceMappingURL=questao-ja-foi-avaliada.exception.js.map