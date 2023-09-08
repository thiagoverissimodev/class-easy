import { Entity } from "../../core/entities/entity";

interface ProfessorProps {
    name: string
}
export class Professor extends Entity<ProfessorProps>{}