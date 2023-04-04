import got from "got";

const getUser = async (userId) => {
  try {
    const response = await got("http://localhost:3000/api/user", {
      headers: {
        userId,
      },
      responseType: "json",
    });

    console.log(response.body);
  } catch (err) {
    console.log(err);
  }
};

const createUser = async () => {
  try {
    const data = {
      name: "Julieta",
      email: "jualieta@mail.com",
    };
    const response = await got.post("http://localhost:3000/api/user", {
      json: data,
      responseType: "json",
    });

    return response.body;
  } catch (err) {
    console.log(err);
  }
};

const createdUser = await createUser();

getUser(createdUser.data.id);
