import { Activity } from "../entities/activity";
import { AnswerActivityRepository } from "../repositories/answers-activity-repository";
import { AnswerActivityUseCase } from "./answer-activity-use-case";

const fakeAnswersActivityRepository: AnswerActivityRepository = {
    create: async (activity: Activity) => {
        return;
    }
}
test('create an answer of an activity', async () => {
    const answerActivity = new AnswerActivityUseCase(fakeAnswersActivityRepository)

    const response = await answerActivity.excute({
        title: 'Atv. Estrutura de dados',
        studentId: '1',
        content: 'Atividade do dia 08-09',
        datetime: new Date()
    })

    expect(response.content).toEqual('Atividade do dia 08-09')
})  