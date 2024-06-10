import express from "express";
import { User } from "../models/User.js";
const router = express.Router();

// Uploading data in User
router.post("/", async (request, response) => {
  try {
    if (!request.body.name || !request.body.password) {
      return response.status(400).send({
        message: "send all required details please",
      });
    }
    const newUser = {
      name: request.body.name,
      batch: request.body.batch,
      password: request.body.password,
    };
    const user = await User.create(newUser);
    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Request for all data in User DB
router.get("/", async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Request for single data
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const users = await User.findById(id);
    return response.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Request for updating data
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.name || !request.body.password) {
      return response.status(400).send({
        message: "send all required details please",
      });
    }
    const { id } = request.params;
    const result = await User.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({
        message: "User no der",
      });
    }
    return response.status(200).send({
      message: "User der",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Delete a user from User
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({
        message: "User no der",
      });
    }
    return response.status(200).send({
      message: "User gon",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
