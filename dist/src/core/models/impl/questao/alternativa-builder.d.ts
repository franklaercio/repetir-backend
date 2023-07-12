import { IAlternativa } from '../../interface/alternativa';
export declare class AlternativaBuilder {
    private _alternativa;
    private constructor();
    static create(): AlternativaBuilder;
    id(id: number): this;
    descricao(descricao: string): this;
    questaoId(questaoId: number): this;
    resposta(resposta: boolean): this;
    build(): IAlternativa;
}
