import { ICategoria } from '../../interface/categoria';
export declare class CategoriaImpl implements ICategoria {
    id: number;
    nome: string;
    categoriaPaiId: number;
    categoriaPai?: ICategoria;
}
