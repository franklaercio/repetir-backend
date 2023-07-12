import { ICategoria } from '../../interface/categoria';
export declare class CategoriaBuilder {
    private _categoria;
    private constructor();
    static create(): CategoriaBuilder;
    id(id: number): CategoriaBuilder;
    nome(nome: string): CategoriaBuilder;
    categoriaPaiId(categoriaPaiId: number): CategoriaBuilder;
    build(): ICategoria;
}
