const User = require("../models/userModel")

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body)
    await newUser.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const uuser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!uuser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(uuser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const dUser = await User.findByIdAndDelete(req.params.id);
    if (!dUser) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ mensaje: "Usuario eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
}