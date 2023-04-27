import { Context, helpers, v1 } from "../../depts.ts";
import { User, Uuid } from "../types/user.type.ts";

const users: User[] = [];

const findUser = (ctx: Context): void => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const user = users.find((user: User) => user.id === userId);

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
  const { name, birthdate } = await ctx.request.body().value;

  if (name && birthdate) {
    const id: Uuid = String(v1.generate());
    const userToCreate: User = { name, birthdate, id };

    users.push(userToCreate);

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
};

const updateUser = async (ctx: Context): Promise<void> => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const { name, birthdate } = await ctx.request.body().value;
  const userIndex = users.findIndex((user: User) => user.id === userId);
  console.log(userIndex);
  if (name && birthdate) {
    users.splice(userIndex, 1, { id: userId, name, birthdate });

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

const deleteUser = (ctx: Context): void => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const userIndex = users.findIndex((user: User) => user.id === userId);

  if (userIndex || userIndex === 0) {
    const deletedUser = users[userIndex];

    users.splice(userIndex, 1);

    ctx.response.status = 200;
    ctx.response.body = {
      status: "Deleted",
      data: deletedUser,
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
