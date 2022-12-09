import { Rickandmort } from "./rickandmort.model";

export interface RickandmortResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  },
  results: Rickandmort[];
}
