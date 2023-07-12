import { UsuarioCadastrarReq } from '../core/models/rest/usuario/usuario-cadastrar-req';
import { UsuarioDao } from '../dal/usuario-dao';
export declare class UsuarioService {
    private usuarioDao;
    constructor(usuarioDao: UsuarioDao);
    cadastrar(params: UsuarioCadastrarReq): Promise<import("../core/models/interface/usuario").IUsuario>;
}
