import { IUsuario } from '../interface/usuario';
export declare class UsuarioBuilder {
    private _usuario;
    private constructor();
    static create(): UsuarioBuilder;
    nome(nome: string): this;
    sobrenome(sobrenome: string): this;
    email(email: string): this;
    senhaCriptografada(senhaCriptografada: string): this;
    senhaSemCriptografiaAsync(senhaSemCriptografia: string): Promise<this>;
    build(): IUsuario;
}
