import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("questions")
class Question {
    @PrimaryColumn()
    id: string;

    @Column()
    correctAnswer: string;

    @Column()
    title: string

    @Column()
    type: string;

    @Column()
    body: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Question };