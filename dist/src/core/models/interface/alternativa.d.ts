import { Alternativa } from '@prisma/client';
import { IQuestao } from './questao';
export interface IAlternativa extends Pick<Alternativa, 'id' | 'descricao' | 'resposta'> {
    questaoId: number;
    questao?: IQuestao;
}
