import { CategoriaImpl } from '../core/models/impl/categoria/categoria';
import { MysqlService } from '../core/mysql/mysql.service';
export declare class CategoriaDao {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    recuperarPorNome(nome: string): Promise<CategoriaImpl[]>;
    recuperarVersaoCache(): Promise<number>;
    recuperarTodas(): Promise<CategoriaImpl[]>;
}
