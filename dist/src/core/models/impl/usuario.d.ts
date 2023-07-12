import { IUsuario } from '../interface/usuario';
export declare class UsuarioImpl implements IUsuario {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    private _senha;
    get senha(): string;
    setSenhaComCriptografia(senha: any): void;
    setSenhaSemCriptografia(senha: any): Promise<void>;
    compararSenha(senhaDescriptografada: string): Promise<boolean>;
}
