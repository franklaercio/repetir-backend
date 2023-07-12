"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const auth_module_1 = require("./auth/auth.module");
const categoria_store_1 = require("./categoria-store");
const categoria_controller_1 = require("./categoria/categoria.controller");
const categoria_service_1 = require("./categoria/categoria.service");
const mysql_module_1 = require("./core/mysql/mysql.module");
const prisma_module_1 = require("./core/prisma/prisma.module");
const provedor_dinamico_proxima_questao_1 = require("./core/providers/provedor-dinamico-proxima-questao");
const dal_module_1 = require("./dal/dal.module");
const estudo_module_1 = require("./estudo/estudo.module");
const proxima_questao_template_method_1 = require("./estudo/framework/proxima-questao-template-method");
const questao_module_1 = require("./questao/questao.module");
const usuario_module_1 = require("./usuario/usuario.module");
(0, dotenv_1.config)();
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            estudo_module_1.EstudoModule,
            usuario_module_1.UsuarioModule,
            questao_module_1.QuestaoModule,
            prisma_module_1.PrismaModule,
            mysql_module_1.MysqlModule,
            dal_module_1.DalModule,
        ],
        controllers: [categoria_controller_1.CategoriaController],
        providers: [
            categoria_service_1.CategoriaService,
            ...(0, provedor_dinamico_proxima_questao_1.ProvedorDinamicoProximaQuestao)(proxima_questao_template_method_1.ProximaQuestaoTemplateMethod),
            (0, categoria_store_1.CategoriaStoreProvider)(),
        ],
        exports: [proxima_questao_template_method_1.ProximaQuestaoTemplateMethod, categoria_store_1.CategoriaStore],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map