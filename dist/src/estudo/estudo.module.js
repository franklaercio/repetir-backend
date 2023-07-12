"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudoModule = void 0;
const common_1 = require("@nestjs/common");
const estudo_controller_1 = require("./estudo.controller");
const estudo_service_1 = require("./estudo.service");
let EstudoModule = exports.EstudoModule = class EstudoModule {
};
exports.EstudoModule = EstudoModule = __decorate([
    (0, common_1.Module)({
        controllers: [estudo_controller_1.EstudoController],
        providers: [estudo_service_1.EstudoService],
    })
], EstudoModule);
//# sourceMappingURL=estudo.module.js.map