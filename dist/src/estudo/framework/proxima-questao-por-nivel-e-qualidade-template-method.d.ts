import { CategoriaStore } from '../../categoria-store';
import { IEstudo } from '../../core/models/interface/estudo';
import { IQuestao } from '../../core/models/interface/questao';
import { EstudoDao } from '../../dal/estudo-dao';
import { QuestaoDao } from '../../dal/questao-dao';
import { QuestaoEstudadaDao } from '../../dal/questao-estudada-dao';
import { ProximaQuestaoTemplateMethod } from './proxima-questao-template-method';
import { ConfigService } from '@nestjs/config';
export declare class ProximaQuestaoPorNivelEQualidadeTemplateMethod extends ProximaQuestaoTemplateMethod {
    private readonly questaoDao;
    private readonly estudoDao;
    private readonly questaoEstudadaDao;
    private readonly categoriaStore;
    private readonly configService;
    private _qualidade;
    constructor(questaoDao: QuestaoDao, estudoDao: EstudoDao, questaoEstudadaDao: QuestaoEstudadaDao, categoriaStore: CategoriaStore, configService: ConfigService);
    private _definindoQualidadeMinima;
    recuperarConjuntoDeQuestoes(estudo: IEstudo): Promise<any>;
    private _procuraConjuntoDeQuestoesEmNiveis;
    selecionarQuestao(conjuntoDeQuestoes: Pick<IQuestao, 'id'>[]): Promise<IQuestao>;
    private _obterItemAleatorio;
}
