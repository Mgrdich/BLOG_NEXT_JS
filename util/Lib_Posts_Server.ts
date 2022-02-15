import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {postDetail, postDetails, postType} from "../types/posts";


export default class Lib_Posts_Server {

    private static postsMarkdownDirectory = path.join(process.cwd(), 'content', 'posts');

    static async fetchAllPosts(): Promise<string[]> {
        return new Promise(function (resolve, reject) {
            fs.readdir(Lib_Posts_Server.postsMarkdownDirectory, function (err, done) {
                if (err) {
                    return reject(err);
                }

                return resolve(done);
            });
        })
    }

    static async fetchPost(fileName: string): Promise<string> {
        const filePath: string = path.join(this.postsMarkdownDirectory, fileName);
        return new Promise(function (resolve, reject) {
            fs.readFile(filePath, {encoding: 'utf-8'}, function (err, done) {
                if (err) {
                    return reject(err);
                }

                return resolve(done);
            });
        })
    }

    static async getPost(fileName: string): Promise<postDetail> {
        const post: string = await this.fetchPost(fileName);
        let {data, content} = matter(post);

        const postSlug: string = fileName.replace(/\.md$/, '');

        return {
            ...data as postType,
            slug: postSlug,
            paragraphDetailed: content
        }
    }

    static async getAllPosts(): Promise<postDetails> {
        const posts: string[] = await this.fetchAllPosts();
        let p: Promise<postDetail>[] = posts.map((postFile) => {
            return this.getPost(postFile)
        });
        return Promise.all(p);
    }

    static async getFeaturedPosts(): Promise<postDetails> {
        const posts: postDetail[] = await this.getAllPosts();

        return posts.filter(item => item.isFeatured);
    }
}