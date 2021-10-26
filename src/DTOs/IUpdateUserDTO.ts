interface IUpdateUserDTO {
    id: string;
    name?: string;
    email?: string;
    score?: number;
    answeredQuestions?: string[];
}

export { IUpdateUserDTO };