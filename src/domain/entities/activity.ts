import { Entity } from "../../core/entities/entity";

interface ActivityProps{
    title: string
    content: string
    studentId: string
    datetime: Date
    score?: number
    link?: string
    isActive?: boolean
}



export class Activity extends Entity<ActivityProps> {
    get content(){
        return this.props.content;
    }
}