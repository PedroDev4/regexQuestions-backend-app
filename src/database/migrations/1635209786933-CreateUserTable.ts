import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1635209786933 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },

                    {
                        name: "name",
                        type: "varchar",
                    },

                    {
                        name: "email",
                        type: "varchar",
                    },

                    {
                        name: "score",
                        type: "int",
                    },

                    {
                        name: "answeredQuestions",
                        type: "varchar",
                    },
                ]
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
