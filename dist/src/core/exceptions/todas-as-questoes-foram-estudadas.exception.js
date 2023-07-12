"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodasAsQuestoesForamEstudadasException = void 0;
const common_1 = require("@nestjs/common");
class TodasAsQuestoesForamEstudadasException extends common_1.BadRequestException {
    constructor() {
        super({
            codigo: 'TODAS_AS_QUESTOES_FORAM_ESTUDADAS',
            mensagem: 'Todas as questões do estudo já foram estudadas',
        });
    }
}
exports.TodasAsQuestoesForamEstudadasException = TodasAsQuestoesForamEstudadasException;
//# sourceMappingURL=todas-as-questoes-foram-estudadas.exception.js.map