import { IEstudo } from '../../interface/estudo';
import { Nivel } from '../../interface/nivel';
export declare class EstudoBuilder {
    private _estudo;
    private constructor();
    static create(): EstudoBuilder;
    id(id: number): this;
    categoriaId(categoriaId: number): this;
    estudanteId(estudanteId: number): this;
    nivelAtual(nivelAtual: Nivel): this;
    desativado(desativado: Date): this;
    build(): IEstudo;
}
