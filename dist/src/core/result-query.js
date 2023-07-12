"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultQuery = void 0;
const dot = require("dot-object");
class ResultQuery {
    constructor(res) {
        this.res = res;
    }
    static create(res) {
        return new ResultQuery(res);
    }
    normalizeResult() {
        if (Array.isArray(this.res))
            return this.normalizeManyResult(this.res);
        else if (this.res)
            return this.normalizeOneResult(this.res);
        else
            return this.res;
    }
    normalizeManyResult(res) {
        res.map((element) => dot.object(element));
        res.forEach((el) => this.clean(el));
        return res;
    }
    normalizeOneResult(res) {
        dot.object(res);
        this.clean(res);
        return res;
    }
    clean(obj) {
        for (const k in obj) {
            if (obj[k] === undefined ||
                obj[k] === null ||
                (obj[k] &&
                    typeof obj[k] === 'object' &&
                    Object.keys(obj[k]).length === 0)) {
                delete obj[k];
            }
            else if (obj[k] && typeof obj[k] === 'object') {
                this.clean(obj[k]);
                if (obj[k] &&
                    typeof obj[k] === 'object' &&
                    Object.keys(obj[k]).length === 0)
                    delete obj[k];
            }
        }
    }
}
exports.ResultQuery = ResultQuery;
//# sourceMappingURL=result-query.js.map