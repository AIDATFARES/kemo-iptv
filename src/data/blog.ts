export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
}

import { post1 } from "./posts/post-1-buying-guide";
import { post2 } from "./posts/post-2-best-players";
import { post3 } from "./posts/post-3-nba-streaming";
import { post4 } from "./posts/post-4-slow-switching";
import { post5 } from "./posts/post-5-apple-tv";
import { post6 } from "./posts/post-6-internet-speed";
import { post7 } from "./posts/post-7-firestick";
import { post8 } from "./posts/post-8-sports-setup";
import { post9 } from "./posts/post-9-black-screen";

export const blogPosts: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
];
