import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuestionsTable1635210057487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "questions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "correctAnswer",
                        type: "varchar"
                    },

                    {
                        name: "title",
                        type: "varchar"
                    },

                    {
                        name: "type",
                        type: "varchar",
                    },
                    {
                        name: "body",
                        type: "varchar"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("questions")
    }

}
