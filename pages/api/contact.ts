import type {NextApiRequest, NextApiResponse} from 'next'
import DB from "../../util/DB";
import {MongoClient} from "mongodb";

type Data = {
    status: number;
    message?: string;
}

async function contactPostHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {email, name, message} = req.body;

    // TODO maybe implement it with a library
    if (!email || !email.includes('@') ||
        !name || !name.trim() ||
        !message || !message.trim()
    ) {
        return res.status(422).json({status: 0, message: 'Invalid Input'});
    }

    const newMessage = {
        email,
        name,
        message
    };

    let connection:DB = await DB.Instance();

    let db:MongoClient = connection.value;


    return res.status(201)
        .json({status: 1, message: 'Message created successfully'})
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        return contactPostHandler(req, res);
    }
}
