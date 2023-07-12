import { CategoriaService } from './categoria.service';
export declare class CategoriaController {
    private categoriaService;
    constructor(categoriaService: CategoriaService);
    recuperar(): Promise<import("../core/models/impl/categoria/categoria").CategoriaImpl[]>;
}
