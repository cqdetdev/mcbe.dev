import User from "./entities/User";
import Post from "./entities/Post";
import Comment from "./entities/Comment";
import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions.js";
import { DataSource } from "typeorm";

const main = async () => {
    const opt: MongoConnectionOptions = {
        name: "forum",
        type: "mongodb",
        entities: [User, Post, Comment],
        host: "127.0.0.1",
    }

    let src = new DataSource(opt);

    src = await src.initialize();

    let user = new User();
    user.username = "test";

    let ur = src.getRepository(User);
    try {
        await ur.save(user);
    } catch (error) {
        console.log(error);
    }
}

await main();