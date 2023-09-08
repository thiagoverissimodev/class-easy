import { Activity } from './../entities/activity';
export interface AnswerActivityRepository {
    create(activity: Activity) : Promise<void>
}