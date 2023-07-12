import { IAlternativa } from '../../interface/alternativa';
import { Nivel } from '../../interface/nivel';
import { Qualidade } from '../../interface/qualidade';
import { IQuestao } from '../../interface/questao';
export declare class QuestaoBuilder {
    private _questao;
    private constructor();
    static create(): QuestaoBuilder;
    id(id: number): this;
    categoriaId(categoriaId: number): this;
    elaboradorId(elaboradorId: number): this;
    enunciado(enunciado: string): this;
    nivel(nivel: Nivel): this;
    qualidade(qualidade: Qualidade): this;
    alternativas(alternativas: IAlternativa[]): this;
    build(): IQuestao;
}
