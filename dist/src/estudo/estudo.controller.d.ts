import { EstudoAvaliarQuestaoReq } from '../core/models/rest/estudo/estudo-avaliar-questao-req';
import { EstudoCadastrarReq } from '../core/models/rest/estudo/estudo-cadastrar-req';
import { EstudoProximaQuestaoReq } from '../core/models/rest/estudo/estudo-proxima-questao-req';
import { EstudoResolverQuestaoReq } from '../core/models/rest/estudo/estudo-resolver-questao-req';
import { EstudoService } from './estudo.service';
export declare class EstudoController {
    private estudoService;
    constructor(estudoService: EstudoService);
    criar(params: EstudoCadastrarReq, req: any): Promise<import("../core/models/impl/estudo/estudo").EstudoImpl>;
    listar(req: any): Promise<import("../core/models/impl/estudo/estudo").EstudoImpl[]>;
    recuperarPorId(estudoId: number, req: any): Promise<import("../core/models/impl/estudo/estudo").EstudoImpl>;
    proximaQuestao(params: EstudoProximaQuestaoReq, req: any): Promise<import("../core/models/interface/questao").IQuestao>;
    resolverQuestao(params: EstudoResolverQuestaoReq, req: any): Promise<import("../core/models/impl/questao/questao-estudada").QuestaoEstudadaImpl>;
    avaliarQuestao(params: EstudoAvaliarQuestaoReq, req: any): Promise<import("../core/models/impl/questao/questao-estudada").QuestaoEstudadaImpl>;
    desativar(params: {
        estudoId: number;
    }, req: any): Promise<void>;
}
