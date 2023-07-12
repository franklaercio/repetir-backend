"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const client_1 = require("@prisma/client");
const categoria_builder_1 = require("../src/core/models/impl/categoria/categoria-builder");
const alternativa_builder_1 = require("../src/core/models/impl/questao/alternativa-builder");
const questao_builder_1 = require("../src/core/models/impl/questao/questao-builder");
const usuario_builder_1 = require("../src/core/models/impl/usuario-builder");
const usuario_para_banco_mapper_1 = require("../src/core/models/impl/usuario-para-banco-mapper");
const nivel_1 = require("../src/core/models/interface/nivel");
const qualidade_1 = require("../src/core/models/interface/qualidade");
const NUM_QUESTOES = 120000;
const NUM_CATEGORIAS = 1500;
const prisma = new client_1.PrismaClient();
async function main() {
    console.time('seed time');
    await prisma.categoriaVersaoCache.create({
        data: {
            versao: 1,
        },
    });
    let ubuild = usuario_builder_1.UsuarioBuilder.create()
        .email('fulano@domain.com')
        .nome('Fulano')
        .sobrenome('De Tal');
    ubuild = await ubuild.senhaSemCriptografiaAsync('123456789');
    await prisma.usuario.create({
        data: usuario_para_banco_mapper_1.UsuarioParaBancoMapper.mapear(ubuild.build()),
    });
    await prisma.categoria.createMany({
        data: gerarCategorias().map((e) => {
            return {
                nome: e.nome,
                categoria_pai_id: e.categoriaPaiId,
                id: e.id,
            };
        }),
    });
    const questoes = gerarQuestoes();
    const alternativas = gerarQuestoes()
        .map((e) => {
        return e.alternativas;
    })
        .flat();
    await prisma.questao.createMany({
        data: questoes.map((e) => {
            return {
                enunciado: e.enunciado,
                nivel: e.nivel,
                qualidade: e.qualidade,
                categoria_id: e.categoriaId,
                elaborador_id: e.elaboradorId,
                id: e.id,
            };
        }),
    });
    await prisma.alternativa.createMany({
        data: alternativas.map((e) => {
            return {
                descricao: e.descricao,
                resposta: e.resposta,
                questao_id: e.questaoId,
            };
        }),
    });
    console.timeEnd('seed time');
}
function gerarCategorias() {
    const numeroCategorias = NUM_CATEGORIAS;
    const categorias = [];
    for (let i = 0; i < numeroCategorias; i++) {
        const nome = faker_1.faker.lorem.sentence({ min: 1, max: 3 });
        let paiId = faker_1.faker.helpers.maybe(() => faker_1.faker.number.int({ min: 1, max: i + 1 }), {
            probability: 0.4,
        });
        if (i === paiId)
            paiId = undefined;
        const o = categoria_builder_1.CategoriaBuilder.create()
            .id(i + 1)
            .nome(nome)
            .categoriaPaiId(paiId)
            .build();
        categorias.push(o);
    }
    return categorias;
}
function gerarQuestoes() {
    const numeroQuestoes = NUM_QUESTOES;
    const questoes = [];
    for (let i = 0; i < numeroQuestoes; i++) {
        const nome = faker_1.faker.lorem.sentence({ min: 1, max: 3 });
        const indiceResposta = Math.floor(Math.random() * 4) + 1;
        const alternativas = [];
        for (let j = 0; j < 4; j++) {
            const descricao = faker_1.faker.lorem.sentence({ min: 1, max: 3 });
            const resposta = j + 1 === indiceResposta;
            const o = alternativa_builder_1.AlternativaBuilder.create()
                .descricao(descricao)
                .resposta(resposta)
                .questaoId(i + 1)
                .build();
            alternativas.push(o);
        }
        const o = questao_builder_1.QuestaoBuilder.create()
            .id(i + 1)
            .enunciado(nome)
            .alternativas(alternativas)
            .categoriaId(faker_1.faker.number.int({ min: 1, max: NUM_CATEGORIAS }))
            .elaboradorId(faker_1.faker.number.int({ min: 1, max: 1 }))
            .nivel(faker_1.faker.helpers.arrayElement([
            nivel_1.Nivel.MuitoFacil,
            nivel_1.Nivel.Facil,
            nivel_1.Nivel.Medio,
            nivel_1.Nivel.Dificil,
            nivel_1.Nivel.MuitoDificil,
        ]))
            .qualidade(faker_1.faker.helpers.arrayElement([
            qualidade_1.Qualidade.MuitoRuim,
            qualidade_1.Qualidade.MuitoBoa,
            qualidade_1.Qualidade.Boa,
            qualidade_1.Qualidade.Ruim,
        ]))
            .build();
        questoes.push(o);
    }
    return questoes;
}
main();
//# sourceMappingURL=heavily-seed.js.map