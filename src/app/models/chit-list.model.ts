import { ChitType } from "../enums/chit-type.enum";

export interface ChitList{
    id: string,
    type: ChitType,
    note:string,
    dueDate?: Date,
    attachment?: string,
    randomColor: string
}