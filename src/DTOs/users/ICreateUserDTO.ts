interface ICreateUserDTO {
    name: string;
    email: string;
    score?: number;
    answeredQuestions?: number[];
}

export { ICreateUserDTO };