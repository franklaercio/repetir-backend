import { Nivel } from '../../interface/nivel';
import { Qualidade } from '../../interface/qualidade';
import { IQuestaoEstudada } from '../../interface/questao-estudada';
export declare class QuestaoEstudadaBuilder {
    private _questaoEstudada;
    private constructor();
    static create(): QuestaoEstudadaBuilder;
    id(id: number): this;
    nivel(nivel: Nivel): this;
    qualidade(qualidade: Qualidade): this;
    alternativaId(alternativaId: number): this;
    estudanteId(estudanteId: number): this;
    estudoId(estudoId: number): this;
    acertou(acertou: boolean): this;
    build(): IQuestaoEstudada;
}
