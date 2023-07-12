import { Provider } from '@nestjs/common';
import { ICategoria } from './core/models/interface/categoria';
export declare function CategoriaStoreProvider(): Provider;
export declare class CategoriaStore {
    private _versao;
    private readonly _todosOsFilhos;
    private readonly _todasAsCategorias;
    constructor(categorias: ICategoria[], _versao: number);
    recuperarTodasAsSubcategorias(categoriaId: number): any[];
    atualizarVersao(novaVersao: number): void;
    versaoIgual(versao: number): boolean;
    private _transformarArrayEmMapa;
    private _transformaArrayParaMapa;
}
