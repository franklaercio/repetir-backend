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
exports.CategoriaService = void 0;
const common_1 = require("@nestjs/common");
const categoria_dao_1 = require("../dal/categoria-dao");
let CategoriaService = exports.CategoriaService = class CategoriaService {
    constructor(categoriaDao) {
        this.categoriaDao = categoriaDao;
    }
    async recuperar() {
        return await this.categoriaDao.recuperarPorNome('');
    }
};
exports.CategoriaService = CategoriaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [categoria_dao_1.CategoriaDao])
], CategoriaService);
//# sourceMappingURL=categoria.service.js.map