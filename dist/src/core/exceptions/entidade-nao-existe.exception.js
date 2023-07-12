"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntidadeNaoExisteException = void 0;
const common_1 = require("@nestjs/common");
class EntidadeNaoExisteException extends common_1.BadRequestException {
    constructor(entidade, contexto) {
        super({
            codigo: 'ENTIDADE_NAO_EXISTE',
            mensagem: `O objeto [${entidade}] solicitado não existe [contexto: ${contexto}]`,
        });
    }
}
exports.EntidadeNaoExisteException = EntidadeNaoExisteException;
//# sourceMappingURL=entidade-nao-existe.exception.js.map