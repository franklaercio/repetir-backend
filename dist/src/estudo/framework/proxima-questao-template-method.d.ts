import { IEstudo } from '../../core/models/interface/estudo';
import { IQuestao } from '../../core/models/interface/questao';
type IQuestaoSomenteId = Pick<IQuestao, 'id'>;
export declare abstract class ProximaQuestaoTemplateMethod {
    proximaQuestao(estudo: IEstudo): Promise<IQuestao>;
    protected abstract recuperarConjuntoDeQuestoes(estudo: IEstudo): Promise<IQuestaoSomenteId[]>;
    protected abstract selecionarQuestao(conjuntoDeQuestoes: IQuestaoSomenteId[]): Promise<IQuestao>;
    protected _extrairQuestoesNaoEstudadas(questoesEstudadas: IQuestaoSomenteId[], questoesDisponiveis: IQuestaoSomenteId[]): {
        id: number;
    }[];
}
export {};
