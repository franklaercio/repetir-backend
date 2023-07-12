import { QuestaoEstudada } from '@prisma/client';
import { IAlternativa } from './alternativa';
import { IEstudo } from './estudo';
import { Nivel } from './nivel';
import { Qualidade } from './qualidade';
import { IUsuario } from './usuario';
export interface IQuestaoEstudada extends Pick<QuestaoEstudada, 'id'> {
    acertou: boolean;
    nivel: Nivel;
    qualidade: Qualidade;
    alternativaId: number;
    alternativa?: IAlternativa;
    estudanteId: number;
    estudante?: IUsuario;
    estudoId: number;
    estudo?: IEstudo;
}
