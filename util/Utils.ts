import {NextApiResponse} from "next";

interface Data {
    status: number;
    message?: string;
}

export default class Utils {
    static log(message?: any, ...optionalParams: any[]): void {
        if (process.env.NODE_ENV === "development") {
            console.log(message, ...optionalParams);
        }
    }

    // TODO fix this extension
    static errorReturn<D extends Data>(res: NextApiResponse<Data>, text: string = 'Something went Wrong') {
        return res.status(301).json({
            status: 0,
            message: text
        });
    }
}