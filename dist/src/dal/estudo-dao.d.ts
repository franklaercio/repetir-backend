import { DaoParamsWrapper } from '../core/dao-params';
import { EstudoImpl } from '../core/models/impl/estudo/estudo';
import { QuestaoEstudadaImpl } from '../core/models/impl/questao/questao-estudada';
import { IEstudo } from '../core/models/interface/estudo';
import { IQuestaoEstudada } from '../core/models/interface/questao-estudada';
import { MysqlService } from '../core/mysql/mysql.service';
export declare class EstudoDao {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    criar(params: DaoParamsWrapper<IEstudo>): Promise<EstudoImpl>;
    listar(params: DaoParamsWrapper<number>): Promise<EstudoImpl[]>;
    recuperarAtivaPorCategoriaId(params: DaoParamsWrapper<Pick<IEstudo, 'estudanteId' | 'categoriaId'>>): Promise<EstudoImpl>;
    recuperarPorId(params: DaoParamsWrapper<number>): Promise<EstudoImpl>;
    atualizarNivelAtual(params: DaoParamsWrapper<IEstudo>): Promise<{}>;
    criarQuestaoEstudadaEmEstudo(params: DaoParamsWrapper<IQuestaoEstudada>): Promise<QuestaoEstudadaImpl>;
    recuperarQuestaoEstudadaPorQuestaoId(params: DaoParamsWrapper<{
        questaoId: number;
        estudoId: number;
    }>): Promise<QuestaoEstudadaImpl>;
    desativar(params: DaoParamsWrapper<number>): Promise<void>;
}
