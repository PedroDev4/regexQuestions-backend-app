interface IUpdateQuestionsDTO {
    id: number;
    correctAnswer?: string;
    title?: string;
    type?: string;
    body?: string;
    alternatives?: [{
        id: number;
        questionId: number;
        body: string;
        isCorrect: boolean
    }]
}

export { IUpdateQuestionsDTO };