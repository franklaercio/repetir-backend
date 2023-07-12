"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProximaQuestaoTemplateMethod = void 0;
const common_1 = require("@nestjs/common");
let ProximaQuestaoTemplateMethod = exports.ProximaQuestaoTemplateMethod = class ProximaQuestaoTemplateMethod {
    async proximaQuestao(estudo) {
        const conjuntoDeQuestoes = await this.recuperarConjuntoDeQuestoes(estudo);
        return await this.selecionarQuestao(conjuntoDeQuestoes);
    }
    _extrairQuestoesNaoEstudadas(questoesEstudadas, questoesDisponiveis) {
        return questoesDisponiveis
            .map((q) => q.id)
            .filter((q) => !questoesEstudadas.map((q) => q.id).includes(q))
            .map((qid) => {
            return { id: qid };
        });
    }
};
exports.ProximaQuestaoTemplateMethod = ProximaQuestaoTemplateMethod = __decorate([
    (0, common_1.Injectable)()
], ProximaQuestaoTemplateMethod);
//# sourceMappingURL=proxima-questao-template-method.js.map