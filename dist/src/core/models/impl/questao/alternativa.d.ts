import { IAlternativa } from '../../interface/alternativa';
import { IQuestao } from '../../interface/questao';
export declare class AlternativaImpl implements IAlternativa {
    questao?: IQuestao;
    questaoId: number;
    id: number;
    descricao: string;
    resposta: boolean;
}
