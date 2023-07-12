import { CategoriaDao } from '../dal/categoria-dao';
export declare class CategoriaService {
    private categoriaDao;
    constructor(categoriaDao: CategoriaDao);
    recuperar(): Promise<import("../core/models/impl/categoria/categoria").CategoriaImpl[]>;
}
