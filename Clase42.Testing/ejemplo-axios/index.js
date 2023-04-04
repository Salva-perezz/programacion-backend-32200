import axios from "./axios.js";

const getUser = async (userId) => {
  try {
    const response = await axios.get("/api/user", {
      headers: {
        userId,
      },
    });

    console.log("Server response:", response.data);
  } catch (err) {
    console.log(err);
  }
};

const createUser = async () => {
  try {
    const response = await axios.post("/api/user", {
      name: "Jorge",
      email: "jorge123@mail.com",
    });

    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
const createdUser = await createUser();

getUser(createdUser.id);
