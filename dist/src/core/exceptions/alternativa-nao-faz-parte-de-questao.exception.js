"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternativaNaoFazParteDeQuestaoException = void 0;
const common_1 = require("@nestjs/common");
class AlternativaNaoFazParteDeQuestaoException extends common_1.BadRequestException {
    constructor(contexto) {
        super({
            codigo: 'ALTERNATIVA_NAO_FAZ_PARTE_DE_QUESTAO',
            mensagem: `A alternativa solicitada não faz parte da questão [contexto: ${contexto}]`,
        });
    }
}
exports.AlternativaNaoFazParteDeQuestaoException = AlternativaNaoFazParteDeQuestaoException;
//# sourceMappingURL=alternativa-nao-faz-parte-de-questao.exception.js.map