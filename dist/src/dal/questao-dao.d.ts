import { DaoParamsWrapper } from '../core/dao-params';
import { QuestaoImpl } from '../core/models/impl/questao/questao';
import { IAlternativa } from '../core/models/interface/alternativa';
import { Nivel } from '../core/models/interface/nivel';
import { IQuestao } from '../core/models/interface/questao';
import { MysqlService } from '../core/mysql/mysql.service';
import { PrismaService } from '../core/prisma/prisma.service';
export declare class QuestaoDao {
    private readonly prismaService;
    private readonly mysqlService;
    constructor(prismaService: PrismaService, mysqlService: MysqlService);
    criar(params: DaoParamsWrapper<IQuestao>): Promise<QuestaoImpl>;
    private criarQuery;
    recuperarPorCategoriaSomenteId(params: DaoParamsWrapper<number[]>): Promise<Pick<IQuestao, 'id'>[]>;
    recuperarPorCategoriaENivelSomenteId(params: DaoParamsWrapper<{
        categoriasIds: number[];
        nivel: Nivel;
    }>): Promise<Pick<IQuestao, 'id'>[]>;
    recuperarPorIds(params: DaoParamsWrapper<number[]>): Promise<IQuestao[]>;
    recuperarAlternativasPorQuestaoId(params: DaoParamsWrapper<number>): Promise<IAlternativa[]>;
    recuperarPorId(params: DaoParamsWrapper<number>): Promise<QuestaoImpl>;
}
