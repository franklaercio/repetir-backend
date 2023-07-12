import { JwtService } from '@nestjs/jwt';
import { UsuarioDao } from '../dal/usuario-dao';
export declare class AuthService {
    private usuarioDao;
    private jwtService;
    constructor(usuarioDao: UsuarioDao, jwtService: JwtService);
    login(username: any, pass: any): Promise<{
        access_token: string;
    }>;
    me(email: string): Promise<import("../core/models/interface/usuario").IUsuario>;
}
