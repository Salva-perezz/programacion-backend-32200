import { Context, helpers, v1 } from "../../depts.ts";
import db from "../db/db.ts";
import { User, Uuid } from "../types/user.type.ts";

const User = db.collection<User>("user");

const findUser = async (ctx: Context): Promise<void> => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const user = await User.findOne({ id: userId });

  if (user) {
    ctx.response.status = 200;
    ctx.response.body = {
      status: "Succes",
      data: user,
    };
  } else {
    ctx.response.status = 404;
    ctx.response.body = {
      status: "Not Found",
      data: null,
    };
  }
};

const createUser = async (ctx: Context): Promise<void> => {
  try {
    const { name, birthdate } = await ctx.request.body().value;

    if (name && birthdate) {
      const id: Uuid = String(v1.generate());
      const userToCreate: User = { name, birthdate, id };

      await User.insertOne(userToCreate);

      ctx.response.status = 201;
      ctx.response.body = {
        status: "Created",
        data: userToCreate,
      };
    } else {
      ctx.response.status = 400;
      ctx.response.body = {
        status: "Missing data",
        data: null,
      };
    }
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (ctx: Context): Promise<void> => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const { name, birthdate } = await ctx.request.body().value;

  if (name && birthdate) {
    await User.updateOne({ id: userId }, { name, birthdate });

    ctx.response.status = 200;
    ctx.response.body = {
      status: "Updated",
      data: { id: userId, name, birthdate },
    };
  } else {
    ctx.response.status = 400;
    ctx.response.body = {
      status: "Missing data",
      data: null,
    };
  }
};

const deleteUser = async (ctx: Context): Promise<void> => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const user: User | undefined = await User.findOne({ id: userId });

  if (user) {
    await User.deleteOne({ id: userId });

    ctx.response.status = 200;
    ctx.response.body = {
      status: "Deleted",
      data: user,
    };
  } else {
    ctx.response.status = 404;
    ctx.response.body = {
      status: "Not Found",
      data: null,
    };
  }
};

export default { findUser, createUser, updateUser, deleteUser };
