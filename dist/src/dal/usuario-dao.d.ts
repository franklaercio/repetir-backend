import { DaoParamsWrapper } from '../core/dao-params';
import { IUsuario } from '../core/models/interface/usuario';
import { MysqlService } from '../core/mysql/mysql.service';
export declare class UsuarioDao {
    private readonly mysqlService;
    constructor(mysqlService: MysqlService);
    cadastrar(params: DaoParamsWrapper<IUsuario>): Promise<IUsuario>;
    recuperarPorEmail(params: DaoParamsWrapper<string>): Promise<IUsuario>;
}
