interface ReviewModel {
  name: string;
  title: string;
  description: string;
  createdAt: string | Date
  rating: number
}

export interface ReviewProps  {
  review: ReviewModel;
}
