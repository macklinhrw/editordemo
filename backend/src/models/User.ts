import { ObjectType, Field } from "type-graphql";
import { prop, getModelForClass, ModelOptions } from "@typegoose/typegoose";

@ObjectType()
@ModelOptions({
  options: { automaticName: false, customName: "user" },
  schemaOptions: { timestamps: true },
})
export class UserClass {
  @Field()
  id?: string;

  @Field()
  @prop({ unique: true })
  name: string;

  @Field()
  @prop({ unique: true })
  email: string;

  @prop()
  password: string;

  @Field()
  createdAt?: string;

  @Field()
  updatedAt?: string;
}

const User = getModelForClass(UserClass);

export default User;
