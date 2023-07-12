import { Usuario } from '@prisma/client';
export interface IUsuario extends Usuario {
    setSenhaComCriptografia(senha: string): any;
    setSenhaSemCriptografia(senha: string): any;
    compararSenha(senhaDescriptografada: string): boolean | Promise<boolean>;
}
