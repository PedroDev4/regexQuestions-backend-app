interface IUpdateUserDTO {
    id: number;
    name?: string;
    email?: string;
    score?: number;
    answeredQuestions?: number[];
}

export { IUpdateUserDTO };