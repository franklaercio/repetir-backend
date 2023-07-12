"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const promise_1 = require("mysql2/promise");
let MysqlService = exports.MysqlService = class MysqlService {
    constructor(config) {
        this.config = config;
        this.pool = (0, promise_1.createPool)({
            host: 'localhost',
            user: this.config.get('DB_USER'),
            password: this.config.get('DB_PASSWORD'),
            database: this.config.get('DB_NAME'),
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10,
            idleTimeout: 60000,
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
        });
    }
    async query(sql, params, pool) {
        const pc = pool ?? this.pool;
        const resultFromQuery = await pc.query(sql, params);
        if (resultFromQuery && resultFromQuery[0] && resultFromQuery[0][0]) {
            const [[res]] = resultFromQuery;
            return res;
        }
        else {
            return [];
        }
    }
    async getConnection() {
        return this.pool.getConnection();
    }
};
exports.MysqlService = MysqlService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MysqlService);
//# sourceMappingURL=mysql.service.js.map