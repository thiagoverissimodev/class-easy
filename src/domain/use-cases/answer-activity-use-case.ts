import { Activity } from '../entities/activity';
import { AnswerActivityRepository } from "../repositories/answers-activity-repository"

interface AnswerActivityUseCaseRequest {
    title: string
    studentId: string
    content: string
    datetime: Date
}

export class AnswerActivityUseCase {
    constructor(
        private AnswerActivityRepository: AnswerActivityRepository,
    ){}

    async excute({ title, studentId, content, datetime}: AnswerActivityUseCaseRequest){
        const activity = new Activity({
            title,
            content,
            studentId,
            datetime
        })
    await this.AnswerActivityRepository.create(activity)
    return activity
    }
}