import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("user_answers")
class UserAnswer {
    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string

    @Column()
    userAnswer: string;

    @Column()
    question_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { UserAnswer };