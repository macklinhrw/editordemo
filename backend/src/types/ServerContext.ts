import { Request, Response } from "express";

/**
 * To allow type-graphql to use express context variables in resolvers.
 */
export type ServerContext = {
  req: Request;
  res: Response;
};
