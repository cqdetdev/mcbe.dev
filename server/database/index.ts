import User from "./entities/User";
import Post from "./entities/Post";
import Comment from "./entities/Comment";
import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions.js";
import { DataSource } from "typeorm";

export let src: DataSource;

const main = async () => {
    const opt: MongoConnectionOptions = {
        name: "forum",
        type: "mongodb",
        entities: [User, Post, Comment],
        host: "127.0.0.1",
    }

    src = new DataSource(opt);
    src = await src.initialize();

    await src.runMigrations();
}

await main();