"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvedorDinamicoProximaQuestao = void 0;
const proxima_questao_aleatoria_template_method_1 = require("../../estudo/framework/proxima-questao-aleatoria-template-method");
const proxima_questao_por_nivel_e_qualidade_template_method_1 = require("../../estudo/framework/proxima-questao-por-nivel-e-qualidade-template-method");
const proxima_questao_por_nivel_template_method_1 = require("../../estudo/framework/proxima-questao-por-nivel-template-method");
function recuperarInstancia() {
    const featProximaQuestao = process.env.FEAT_PROXIMA_QUESTAO;
    if (process.env.FEAT_PROXIMA_QUESTAO === 'aleatorio') {
        return proxima_questao_aleatoria_template_method_1.ProximaQuestaoAleatoriaTemplateMethod;
    }
    else if (process.env.FEAT_PROXIMA_QUESTAO === 'por-nivel') {
        return proxima_questao_por_nivel_template_method_1.ProximaQuestaoPorNivelTemplateMethod;
    }
    else if (process.env.FEAT_PROXIMA_QUESTAO === 'por-nivel-e-qualidade') {
        return proxima_questao_por_nivel_e_qualidade_template_method_1.ProximaQuestaoPorNivelEQualidadeTemplateMethod;
    }
    else {
        throw new Error(`Modalidade '${featProximaQuestao}' não implementada`);
    }
}
function ProvedorDinamicoProximaQuestao(token) {
    const instancia = recuperarInstancia();
    return [
        instancia,
        {
            provide: token,
            useExisting: instancia,
        },
    ];
}
exports.ProvedorDinamicoProximaQuestao = ProvedorDinamicoProximaQuestao;
//# sourceMappingURL=provedor-dinamico-proxima-questao.js.map