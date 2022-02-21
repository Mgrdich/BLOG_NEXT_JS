import {Db, MongoClient} from "mongodb";
import Utils from "./Utils";

export default class DB {

    private static _instance: DB;

    private static dataBaseStatus: boolean = false;

    private static db_connection: MongoClient;

    private static async connect(): Promise<MongoClient> {
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
            return Promise.resolve(this._instance);
        }

        this._instance = new DB();
        await this.connect();
        return this._instance;
    }

    public get value():Db {
        return DB.db_connection.db();
    }
}