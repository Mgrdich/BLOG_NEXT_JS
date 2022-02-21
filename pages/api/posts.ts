import type {NextApiRequest, NextApiResponse} from 'next'
import {API_Response} from "../../types/global";

async function postsPostHandler(req: NextApiRequest, res: NextApiResponse<API_Response>) {}

async function postsGetHandler(req: NextApiRequest, res: NextApiResponse<API_Response>) {}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_Response>
) {
    if (req.method === 'POST') {
        return postsPostHandler(req, res);
    }

    if(req.method === 'GET') {
        return postsGetHandler(req, res);
    }
}
