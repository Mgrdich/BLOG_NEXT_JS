import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    status: number;
    message?: string;
}

function contactPostHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
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
