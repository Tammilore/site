import type { Post } from "@/types/post";
import type { Work } from "@/types/work";
import type { Thought } from "@/types/thought";

import fs from "fs";
import path from "path";

import matter from "gray-matter";

function readFile(filePath: string): Post | null {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    const slug = path.basename(filePath, path.extname(filePath));

    return {
      ...data,
      slug,
      content,
    } as Post;
  } catch (error) {
    console.error(`Failed to read or parse the file at ${filePath}:`, error);
    return null;
  }
}

function getFiles(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Failed to read directory at ${dir}:`, error);
    return [];
  }
}

export function getPosts(directory: string): Post[] {
  const files = getFiles(path.join(process.cwd(), "app", "(posts)", directory, "posts"));
  return files.map((file) => readFile(path.join(process.cwd(), "app", "(posts)", directory, "posts", file))).filter((post): post is Post => post !== null);
}

export function getWork(directory: string): Post[] {
  const files = getFiles(path.join(process.cwd(), "app", "(posts)", directory, "posts"));
  return files.map((file) => readFile(path.join(process.cwd(), "app", "(posts)", directory, "posts", file))).filter((work): work is Work => work !== null);
}

export function getThought(directory: string): Post[] {
  const files = getFiles(path.join(process.cwd(), "app", "(posts)", directory, "posts"));
  return files.map((file) => readFile(path.join(process.cwd(), "app", "(posts)", directory, "posts", file))).filter((thought): thought is Thought => thought !== null);
}