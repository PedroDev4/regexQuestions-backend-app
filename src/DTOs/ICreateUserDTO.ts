interface ICreateUserDTO {
    name: string;
    email: string;
    score?: number;
    answeredQuestions?: string[];
}

export { ICreateUserDTO };