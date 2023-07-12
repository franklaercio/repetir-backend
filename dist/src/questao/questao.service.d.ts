import { QuestaoCriarReq } from '../core/models/rest/questao/questao-criar-req';
import { UsuarioDao } from '../dal/usuario-dao';
export declare class QuestaoService {
    private usuarioDao;
    constructor(usuarioDao: UsuarioDao);
    criar(params: QuestaoCriarReq, email: string): Promise<void>;
}
