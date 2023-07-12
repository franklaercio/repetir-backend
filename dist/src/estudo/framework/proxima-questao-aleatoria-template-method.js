"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProximaQuestaoAleatoriaTemplateMethod = void 0;
const common_1 = require("@nestjs/common");
const categoria_store_1 = require("../../categoria-store");
const todas_as_questoes_foram_estudadas_exception_1 = require("../../core/exceptions/todas-as-questoes-foram-estudadas.exception");
const questao_dao_1 = require("../../dal/questao-dao");
const questao_estudada_dao_1 = require("../../dal/questao-estudada-dao");
const proxima_questao_template_method_1 = require("./proxima-questao-template-method");
let ProximaQuestaoAleatoriaTemplateMethod = exports.ProximaQuestaoAleatoriaTemplateMethod = class ProximaQuestaoAleatoriaTemplateMethod extends proxima_questao_template_method_1.ProximaQuestaoTemplateMethod {
    constructor(questaoDao, questaoEstudadaDao, categoriaStore) {
        super();
        this.questaoDao = questaoDao;
        this.questaoEstudadaDao = questaoEstudadaDao;
        this.categoriaStore = categoriaStore;
    }
    async recuperarConjuntoDeQuestoes(estudo) {
        const categorias = this.categoriaStore
            .recuperarTodasAsSubcategorias(estudo.categoria.id)
            ?.filter((c) => c && c.id)
            ?.map((c) => c?.id);
        const q = await this.questaoDao.recuperarPorCategoriaSomenteId({
            data: categorias,
        });
        const qe = await this.questaoEstudadaDao.recuperarSomenteIdPorEstudo({
            data: estudo.id,
        });
        return this._extrairQuestoesNaoEstudadas(qe, q);
    }
    async selecionarQuestao(conjuntoDeQuestoes) {
        if (conjuntoDeQuestoes?.length === 0)
            throw new todas_as_questoes_foram_estudadas_exception_1.TodasAsQuestoesForamEstudadasException();
        const questoesDisponiveis = await this.questaoDao.recuperarPorIds({
            data: conjuntoDeQuestoes.map((e) => e.id),
        });
        const questao = this._obterItemAleatorio(questoesDisponiveis);
        questao.alternativas =
            await this.questaoDao.recuperarAlternativasPorQuestaoId({
                data: questao.id,
            });
        return questao;
    }
    _obterItemAleatorio(array) {
        if (array.length === 0) {
            return undefined;
        }
        const indiceAleatorio = Math.floor(Math.random() * array.length);
        return array[indiceAleatorio];
    }
};
exports.ProximaQuestaoAleatoriaTemplateMethod = ProximaQuestaoAleatoriaTemplateMethod = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [questao_dao_1.QuestaoDao,
        questao_estudada_dao_1.QuestaoEstudadaDao,
        categoria_store_1.CategoriaStore])
], ProximaQuestaoAleatoriaTemplateMethod);
//# sourceMappingURL=proxima-questao-aleatoria-template-method.js.map