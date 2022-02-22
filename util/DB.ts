import {Db, MongoClient} from "mongodb";
import Utils from "./Utils";

export default class DB {

    private static _instance: DB;

    private dataBaseStatus: boolean = false;

    private db_connection: MongoClient | undefined;

    private connect(): Promise<MongoClient> {
        if (this.db_connection) {
            return Promise.resolve(this.db_connection);
        }

        return MongoClient.connect(process.env.MONGODB_URI as string)
            .then((db) => {
                this.dataBaseStatus = true;
                this.db_connection = db;
                Utils.log("DataBase is connected");
                return this.db_connection
            }).catch(err => {
                Utils.log("DataBase has error in connection");
                this.dataBaseStatus = false;
                return err;
            });
    }

    private constructor() {}

    public static async Instance(): Promise<DB> {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new DB();
        await this._instance.connect();
        return this._instance;
    }

    public getDbConnection(): Db {
        return (this.db_connection as MongoClient).db();
    }
}