"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaStore = exports.CategoriaStoreProvider = void 0;
const categoria_dao_1 = require("./dal/categoria-dao");
function CategoriaStoreProvider() {
    return {
        provide: CategoriaStore,
        useFactory: async (categoriaDao) => {
            const categorias = await categoriaDao.recuperarTodas();
            const versao = await categoriaDao.recuperarVersaoCache();
            return new CategoriaStore(categorias, versao);
        },
        inject: [categoria_dao_1.CategoriaDao],
    };
}
exports.CategoriaStoreProvider = CategoriaStoreProvider;
class CategoriaStore {
    constructor(categorias, _versao) {
        this._versao = _versao;
        this._todosOsFilhos = this._transformarArrayEmMapa(categorias);
        this._todasAsCategorias = this._transformaArrayParaMapa(categorias);
    }
    recuperarTodasAsSubcategorias(categoriaId) {
        const itensFinal = [];
        const categoriasFilhas = this._todosOsFilhos.get(categoriaId);
        if (categoriasFilhas && Array.isArray(categoriasFilhas))
            itensFinal.push(...categoriasFilhas);
        else if (categoriasFilhas)
            itensFinal.push(categoriasFilhas);
        itensFinal.push(this._todasAsCategorias.get(categoriaId));
        return itensFinal;
    }
    atualizarVersao(novaVersao) {
        this._versao = novaVersao;
    }
    versaoIgual(versao) {
        return this._versao === versao;
    }
    _transformarArrayEmMapa(array) {
        const mapa = new Map();
        for (const objeto of array) {
            const paiId = objeto.categoriaPaiId;
            if (mapa.has(paiId)) {
                mapa.get(paiId)?.push(objeto);
            }
            else {
                if (paiId === null || paiId === undefined) {
                    mapa.set(objeto.id, []);
                }
                else {
                    mapa.set(paiId, [objeto]);
                }
            }
        }
        return mapa;
    }
    _transformaArrayParaMapa(categorias) {
        const mapa = new Map();
        for (const categoria of categorias) {
            mapa.set(categoria.id, categoria);
        }
        return mapa;
    }
}
exports.CategoriaStore = CategoriaStore;
//# sourceMappingURL=categoria-store.js.map