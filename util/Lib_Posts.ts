import fs from 'fs/promises';
import path from "path";
import matter from "gray-matter";


export default class Lib_Posts {

    private static postsRelativePosition = '/images/posts';
    private static postsMarkdownDirectory = path.join(process.cwd(), 'content', 'posts');

    static getPostsImagesLoc(slug: string, image: string): string {
        return `${this.postsRelativePosition}/${slug}/${image}`;
    }

    static async fetchAllPosts(): Promise<string[]> {
        return fs.readdir(Lib_Posts.postsMarkdownDirectory);
    }

    static async fetchPost(fileName: string): Promise<string> {
        const filePath: string = path.join(Lib_Posts.postsMarkdownDirectory, fileName);
        return fs.readFile(filePath, {encoding: 'utf-8'});
    }

    static async getAllPosts(): Promise<void> {
        const posts: string[] = await this.fetchAllPosts();

    }

    static async getPost(fileName: string): Promise<void> {
        const post: string = await this.fetchPost(fileName);
    }
}