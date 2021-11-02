interface IUpdateArticleDTO {
  id: number;
  title?: string;
  content?: string;
  author?: string;
  subAuthor?: string;
  publishedAt: Date
  videoLink?: string;
  articleLink?: string;
  coverLink?: string;
}

export { IUpdateArticleDTO }