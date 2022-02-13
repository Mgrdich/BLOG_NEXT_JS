export interface postType {
    id: string,
    header: string,
    slug: string,
    image: string,
    time: number | string | Date,
    paragraph: string
}

export interface postDetail extends postType {
    paragraphDetailed: string // this will be markdown code
}

export type postsType = postType[];

export type postDetails = postDetail[];