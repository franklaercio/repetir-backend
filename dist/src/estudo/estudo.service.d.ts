import { CategoriaStore } from '../categoria-store';
import { EstudoImpl } from '../core/models/impl/estudo/estudo';
import { QuestaoEstudadaImpl } from '../core/models/impl/questao/questao-estudada';
import { Nivel } from '../core/models/interface/nivel';
import { Qualidade } from '../core/models/interface/qualidade';
import { EstudoCadastrarReq } from '../core/models/rest/estudo/estudo-cadastrar-req';
import { MysqlService } from '../core/mysql/mysql.service';
import { EstudoDao } from '../dal/estudo-dao';
import { QuestaoDao } from '../dal/questao-dao';
import { QuestaoEstudadaDao } from '../dal/questao-estudada-dao';
import { UsuarioDao } from '../dal/usuario-dao';
import { ProximaQuestaoTemplateMethod } from './framework/proxima-questao-template-method';
export declare class EstudoService {
    private readonly estudoDao;
    private readonly usuarioDao;
    private readonly proximaQuestaoTemplateMethod;
    private readonly questaoDao;
    private readonly questaoEstudadaDao;
    private readonly categoriaStore;
    private readonly mysqlService;
    constructor(estudoDao: EstudoDao, usuarioDao: UsuarioDao, proximaQuestaoTemplateMethod: ProximaQuestaoTemplateMethod, questaoDao: QuestaoDao, questaoEstudadaDao: QuestaoEstudadaDao, categoriaStore: CategoriaStore, mysqlService: MysqlService);
    recuperarPorId(estudoId: number, email: string): Promise<EstudoImpl>;
    cadastrar(estudo: EstudoCadastrarReq, email: string): Promise<EstudoImpl>;
    proximaQuestao(estudoId: number, email: string): Promise<import("../core/models/interface/questao").IQuestao>;
    resolverQuestao(estudoId: number, questaoId: number, alternativaId: number, username: any): Promise<QuestaoEstudadaImpl>;
    listar(email: string): Promise<EstudoImpl[]>;
    avaliarQuestao(questaoEstudadaId: number, nivel: Nivel, qualidade: Qualidade, username: any): Promise<QuestaoEstudadaImpl>;
    desativar(estudoId: number, email: string): Promise<void>;
}
