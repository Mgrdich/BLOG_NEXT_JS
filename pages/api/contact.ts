import type {NextApiRequest, NextApiResponse} from 'next'
import DB from "../../util/DB";
import {Db, InsertOneResult} from "mongodb";
import Utils from "../../util/Utils";
import {API_Response} from "../../types/global";

type message = {
    email: string;
    name: string;
    message: string;
}

async function contactPostHandler(req: NextApiRequest, res: NextApiResponse<API_Response>) {
    const {email, name, message} = req.body;

    // TODO maybe implement it with a library
    if (!email || !email.includes('@') ||
        !name || !name.trim() ||
        !message || !message.trim()
    ) {
        return res.status(422).json({status: 0, message: 'Invalid Input'});
    }

    const newMessage: message = {
        email,
        name,
        message
    };

    try {
        // it caches the connection so no worries :)
        let connection: DB = await DB.Instance();

        let db: Db = connection.value;
        let response: InsertOneResult<message> = await db.collection('messages').insertOne(newMessage);
        if (!response.acknowledged) {
            return Utils.errorReturn(res);
        }
        return Utils.createdSuccessfully(res, 'Message created successfully');
    } catch (err) {
        return Utils.errorReturn(res);
    }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<API_Response>
) {
    if (req.method === 'POST') {
        return contactPostHandler(req, res);
    }
}
