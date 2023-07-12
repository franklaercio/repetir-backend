import { Categoria } from '@prisma/client';
export interface ICategoria extends Pick<Categoria, 'nome' | 'id'> {
    categoriaPai?: ICategoria;
    categoriaPaiId: number;
}
