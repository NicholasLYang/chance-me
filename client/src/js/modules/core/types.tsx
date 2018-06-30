export type Topic = {
  name: string;
  color: string;
}

export type Review = {
  id: string;
  content: string;
  topic: Topic;
}

export type School = {
  reviews: Review[];
}


export type Variables = {
  id: string
}