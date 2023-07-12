import { IEstudo } from '../../interface/estudo';
export declare class EstudoParaBancoMapper {
    static mapear(estudo: IEstudo): import("@prisma/client/runtime").GetResult<{
        id: number;
        nivel_atual: string;
        desativado: Date;
        estudante_id: number;
        categoria_id: number;
    }, unknown> & {};
}
