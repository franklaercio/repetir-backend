import { IUsuario } from '../interface/usuario';
export declare class UsuarioParaBancoMapper {
    static mapear(usuario: IUsuario): import("@prisma/client/runtime").GetResult<{
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        senha: string;
    }, unknown> & {};
}
