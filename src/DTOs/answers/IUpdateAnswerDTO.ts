interface IUpdateAnswerDTO {
    id: number;
    userId?: number;
    userAnswer?: string;
    questionId?: number;
}

export { IUpdateAnswerDTO };