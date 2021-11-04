interface ICreateQuestionsDTO {
    title: string;
    body: string;
    correctAnswer: string;
    type: string;
    alternatives?: [{
        id: number;
        questionId: number;
        body: string;
        isCorrect: boolean
    }]
}

export { ICreateQuestionsDTO };