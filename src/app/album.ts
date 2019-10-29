import { Track } from "./track";

export interface Album {
  name: string;
  releaseDare: string;
  coverImage: string;
  tracks: Track[];
}
