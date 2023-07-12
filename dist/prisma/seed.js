"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const usuario_builder_1 = require("../src/core/models/impl/usuario-builder");
const usuario_para_banco_mapper_1 = require("../src/core/models/impl/usuario-para-banco-mapper");
const nivel_1 = require("../src/core/models/interface/nivel");
const qualidade_1 = require("../src/core/models/interface/qualidade");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.categoriaVersaoCache.create({
        data: {
            versao: 1,
        },
    });
    const cat_port = await prisma.categoria.create({
        data: {
            nome: 'Português',
        },
    });
    await prisma.categoria.create({
        data: {
            nome: 'Fonética',
            categoria_pai_id: cat_port.id,
        },
    });
    await prisma.categoria.create({
        data: {
            nome: 'Fonologia',
            categoria_pai_id: cat_port.id,
        },
    });
    const cat_morf = await prisma.categoria.create({
        data: {
            nome: 'Morfologia',
            categoria_pai_id: cat_port.id,
        },
    });
    await prisma.categoria.create({
        data: {
            nome: 'Elementos Morfológicos',
            categoria_pai_id: cat_morf.id,
        },
    });
    await prisma.categoria.create({
        data: {
            nome: 'Substantivos',
            categoria_pai_id: cat_morf.id,
        },
    });
    const cat_verb = await prisma.categoria.create({
        data: {
            nome: 'Verbos',
            categoria_pai_id: cat_morf.id,
        },
    });
    await prisma.categoria.create({
        data: {
            nome: 'Sintaxe',
            categoria_pai_id: cat_port.id,
        },
    });
    const cat_geo = await prisma.categoria.create({
        data: {
            nome: 'Geografia',
        },
    });
    await prisma.categoria.create({
        data: {
            nome: 'Espaço Geográfico',
            categoria_pai_id: cat_geo.id,
        },
    });
    await prisma.categoria.create({
        data: {
            nome: 'Paisagem',
            categoria_pai_id: cat_geo.id,
        },
    });
    await prisma.categoria.create({
        data: {
            nome: 'Território',
            categoria_pai_id: cat_geo.id,
        },
    });
    let ubuild = usuario_builder_1.UsuarioBuilder.create()
        .email('fulano@domain.com')
        .nome('Fulano')
        .sobrenome('De Tal');
    ubuild = await ubuild.senhaSemCriptografiaAsync('123456789');
    const usuario = await prisma.usuario.create({
        data: usuario_para_banco_mapper_1.UsuarioParaBancoMapper.mapear(ubuild.build()),
    });
    await prisma.questao.create({
        include: {
            alternativas: true,
        },
        data: {
            enunciado: 'Assinale a alternativa em que a forma verbal destacada está flexionada em conformidade com a norma-padrão.',
            nivel: nivel_1.Nivel.Medio,
            qualidade: qualidade_1.Qualidade.Boa,
            alternativas: {
                createMany: {
                    data: [
                        {
                            descricao: 'Se as plataformas se manterem omissas em relação à violência virtual, provavelmente as agressões no mundo real aumentarão.',
                            resposta: false,
                        },
                        {
                            descricao: 'Os ataques às escolas são uma realidade inconteste e, para evitar novas ocorrências, a autoridade pública já interviu com rigor.',
                            resposta: false,
                        },
                        {
                            descricao: 'Se as plataformas fazerem de conta que a violência não existe no mundo virtual, dará condições de elas aumentarem ainda mais.',
                            resposta: false,
                        },
                        {
                            descricao: 'Para enfrentar as dificuldades que sobrevierem no combate à violência, as redes sociais devem valer-se do Marco Civil da Internet.',
                            resposta: true,
                        },
                    ],
                },
            },
            categoria_id: cat_verb.id,
            elaborador_id: usuario.id,
        },
    });
}
main();
//# sourceMappingURL=seed.js.map