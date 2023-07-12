import { ConfigService } from '@nestjs/config';
import { PoolConnection } from 'mysql2/promise';
export declare class MysqlService {
    private config;
    private readonly pool;
    constructor(config: ConfigService);
    query<T>(sql: string, params: any[], pool?: PoolConnection): Promise<T[]>;
    getConnection(): Promise<PoolConnection>;
}
