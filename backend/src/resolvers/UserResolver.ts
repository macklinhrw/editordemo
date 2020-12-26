import User, { UserClass } from "../models/User";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";

@Resolver(UserClass)
export class UserResolver {
  @Query(() => [UserClass])
  async getUsers(): Promise<UserClass[]> {
    const users = await User.find({});
    return users;
  }
  @Query(() => UserClass)
  async currentUser(): Promise<UserClass> {}
  @Mutation(() => UserClass)
  async login(): Promise<UserClass> {}
  @Mutation(() => UserClass)
  async register(
    @Arg("username") name: string,
    @Arg("password") password: string,
    @Arg("email") email: string,
    @Ctx { req }
  ): Promise<UserClass> {}
}
