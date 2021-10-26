import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserAnswersTable1635210286502 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_answers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },

                    {
                        name: "userAnswer",
                        type: "varchar",
                    },

                    {
                        name: "question_id",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUserId",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },

                    {
                        name: "FKQuestionId",
                        referencedTableName: "questions",
                        referencedColumnNames: ["id"],
                        columnNames: ["question_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",

                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_answers")
    }

}
