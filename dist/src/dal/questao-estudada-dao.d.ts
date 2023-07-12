import { DaoParamsWrapper } from '../core/dao-params';
import { IQuestao } from '../core/models/interface/questao';
import { MysqlService } from '../core/mysql/mysql.service';
import { IQuestaoEstudada } from '../core/models/interface/questao-estudada';
import { QuestaoEstudadaImpl } from '../core/models/impl/questao/questao-estudada';
export declare class QuestaoEstudadaDao {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    recuperarSomenteIdPorEstudo(params: DaoParamsWrapper<number>): Promise<Pick<IQuestao, 'id'>[]>;
    recuperarPorId(params: DaoParamsWrapper<number>): Promise<QuestaoEstudadaImpl>;
    atualizarNivelEQualidade(params: DaoParamsWrapper<IQuestaoEstudada>): Promise<QuestaoEstudadaImpl>;
}
