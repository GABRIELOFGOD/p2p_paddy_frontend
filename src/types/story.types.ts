export interface StoryType {
  watched: number[];
  data: {
    title: string;
    description: string;
    image: string;
    genre: string;
    releaseDate: string;
    rating: number;
    duration: number;
  };
}