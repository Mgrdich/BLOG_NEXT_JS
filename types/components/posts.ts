export interface postType {
    id: string,
    header: string,
    slug: string,
    image:string,
    time: number | string | Date,
    paragraph: string
}

export type postsType = postType[];