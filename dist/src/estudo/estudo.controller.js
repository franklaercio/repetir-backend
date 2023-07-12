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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudoController = void 0;
const common_1 = require("@nestjs/common");
const estudo_service_1 = require("./estudo.service");
let EstudoController = exports.EstudoController = class EstudoController {
    constructor(estudoService) {
        this.estudoService = estudoService;
    }
    async criar(params, req) {
        return await this.estudoService.cadastrar(params, req.user.username);
    }
    async listar(req) {
        return await this.estudoService.listar(req.user.username);
    }
    async recuperarPorId(estudoId, req) {
        return await this.estudoService.recuperarPorId(Number(estudoId), req.user.username);
    }
    async proximaQuestao(params, req) {
        return await this.estudoService.proximaQuestao(Number(params.estudoId), req.user.username);
    }
    async resolverQuestao(params, req) {
        return await this.estudoService.resolverQuestao(params.estudoId, params.questaoId, params.alternativaId, req.user.username);
    }
    async avaliarQuestao(params, req) {
        return await this.estudoService.avaliarQuestao(params.questaoEstudadaId, params.nivel, params.qualidade, req.user.username);
    }
    async desativar(params, req) {
        return await this.estudoService.desativar(Number(params.estudoId), req.user.username);
    }
};
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EstudoController.prototype, "criar", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EstudoController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EstudoController.prototype, "recuperarPorId", null);
__decorate([
    (0, common_1.Get)('proxima-questao'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EstudoController.prototype, "proximaQuestao", null);
__decorate([
    (0, common_1.Post)('resolver-questao'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EstudoController.prototype, "resolverQuestao", null);
__decorate([
    (0, common_1.Post)('avaliar-questao'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EstudoController.prototype, "avaliarQuestao", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EstudoController.prototype, "desativar", null);
exports.EstudoController = EstudoController = __decorate([
    (0, common_1.Controller)('estudo'),
    __metadata("design:paramtypes", [estudo_service_1.EstudoService])
], EstudoController);
//# sourceMappingURL=estudo.controller.js.map