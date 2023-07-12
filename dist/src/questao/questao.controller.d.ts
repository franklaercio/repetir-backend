import { QuestaoService } from './questao.service';
import { QuestaoCriarReq } from '../core/models/rest/questao/questao-criar-req';
export declare class QuestaoController {
    private readonly questaoService;
    constructor(questaoService: QuestaoService);
    criar(params: QuestaoCriarReq, req: any): Promise<void>;
}
