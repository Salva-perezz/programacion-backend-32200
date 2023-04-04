import UserDTO from "../dto/user.dto.js";
import userService from "../services/user.service.js";
import Response from "../utils/Response.js";

const getOneUser = async (req, res) => {
  try {
    const userId = req.header("userId");
    const response = await userService.getUserById(userId);
    const userDto = new UserDTO(response);
    console.log(userDto);
    res.json(new Response(userDto, "Succes"));
  } catch (err) {
    console.log(err);
    res.json(new Response(null, "Error", err, 500));
  }
};

const createUser = async (req, res) => {
  try {
    const createdUser = await userService.createUser(req.body);

    res.status(201).json(new Response(createdUser, "Succes"));
  } catch (err) {
    console.log(err);
    res.json(new Response(null, "Error", err, 500));
  }
};

export default { getOneUser, createUser };
