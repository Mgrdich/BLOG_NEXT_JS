import type {NextApiRequest, NextApiResponse} from 'next'
import {API_Response} from "../../types/global";
import DB from "../../util/DB";
import {Db, InsertOneResult} from "mongodb";
import Utils from "../../util/Utils";

async function postsPostHandler(req: NextApiRequest, res: NextApiResponse<API_Response>) {
    try {
        // it caches the connection so no worries :)
        let connection: DB = await DB.Instance();

        let db: Db = connection.value;

    } catch (err) {
        return Utils.errorReturn(res);
    }

}

async function postsGetHandler(req: NextApiRequest, res: NextApiResponse<API_Response>) {
    try {
        // it caches the connection so no worries :)
        let connection: DB = await DB.Instance();

        let db: Db = connection.value;

    } catch (err) {
        return Utils.errorReturn(res);
    }
}

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
