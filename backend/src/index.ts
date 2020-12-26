import { connection } from "./utils/withMongoose";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { UserResolver } from "./resolvers/UserResolver";
import session from "express-session";
import mongo from "connect-mongo";

const main = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    playground: true,
    context: ({ req, res }) => ({ req, res }),
  });

  const app = express();
  const MongoStore = mongo(session);

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(
    session({
      name: "uid", //ben made a constants folder and exported the constant and used it here instead
      store: new MongoStore({ mongooseConnection: connection }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV !== "development",
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  server.applyMiddleware({ app, cors: false });

  app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT + server.graphqlPath}`);
  });
};
main();
