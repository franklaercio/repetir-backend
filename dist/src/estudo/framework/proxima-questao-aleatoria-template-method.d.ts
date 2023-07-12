import { CategoriaStore } from '../../categoria-store';
import { IEstudo } from '../../core/models/interface/estudo';
import { IQuestao } from '../../core/models/interface/questao';
import { QuestaoDao } from '../../dal/questao-dao';
import { QuestaoEstudadaDao } from '../../dal/questao-estudada-dao';
import { ProximaQuestaoTemplateMethod } from './proxima-questao-template-method';
export declare class ProximaQuestaoAleatoriaTemplateMethod extends ProximaQuestaoTemplateMethod {
    private readonly questaoDao;
    private readonly questaoEstudadaDao;
    private readonly categoriaStore;
    constructor(questaoDao: QuestaoDao, questaoEstudadaDao: QuestaoEstudadaDao, categoriaStore: CategoriaStore);
    recuperarConjuntoDeQuestoes(estudo: IEstudo): Promise<{
        id: number;
    }[]>;
    selecionarQuestao(conjuntoDeQuestoes: Pick<IQuestao, 'id'>[]): Promise<IQuestao>;
    private _obterItemAleatorio;
}
