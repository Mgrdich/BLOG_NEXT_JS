import {MongoClient} from "mongodb";

export default class DB {

    private static _instance: DB;

    private dataBaseStatus: boolean = false;

    private db_connection: any;

    private constructor() {
        MongoClient.connect(process.env.MONGODB_URI as string).then((db) => {
            this.db_connection = db;
        }).catch((err) => {
            console.log(err);
            this.dataBaseStatus = false;
        });
    }

    public static get Instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new DB();
        return this._instance;
    }

    public get db() {
        return this.db_connection;
    }
}