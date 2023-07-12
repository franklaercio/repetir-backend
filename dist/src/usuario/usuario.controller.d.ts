import { UsuarioCadastrarReq } from '../core/models/rest/usuario/usuario-cadastrar-req';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    cadastrar(params: UsuarioCadastrarReq): Promise<import("../core/models/interface/usuario").IUsuario>;
}
