import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(params: Record<string, any>): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<import("../core/models/interface/usuario").IUsuario>;
}
