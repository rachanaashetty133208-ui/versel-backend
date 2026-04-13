import express from "express";
import Note from "../models/Note.js";
import middleware from "../middleware/middleware.js";

const router = express.Router();

router.post("/add", middleware, async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = new Note({
      title,
      description,
      userId: req.user.id,
    });

    await newNote.save();

    return res.status(200).json({
      success: true,
      message: "user baba information is saved successfuly ",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "error in user adding" });
  }
});

router.get("/", middleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.status(200).json({ success: true, notes });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "data can't be retrive baba " });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateNote = await Note.findByIdAndUpdate(id, req.body);
    res.status(200).json({ success: true, updateNote });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "data can't be update  baba " });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteNote = await Note.findByIdAndDelete(id);
    res.status(200).json({ success: true, deleteNote });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "data can't be update  baba " });
  }
});

export default router;
