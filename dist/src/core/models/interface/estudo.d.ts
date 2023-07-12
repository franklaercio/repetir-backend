import { Estudo } from '@prisma/client';
import { IUsuario } from './usuario';
import { ICategoria } from './categoria';
import { Nivel } from './nivel';
export interface IEstudo extends Pick<Estudo, 'id' | 'desativado'> {
    categoriaId: number;
    estudanteId: number;
    nivelAtual: Nivel;
    categoria?: ICategoria;
    estudante?: IUsuario;
}
