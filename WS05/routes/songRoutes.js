const express = require("express");
const Song = require("../models/song");

const router = express.Router();

/* Task 1: Create REST API Routes */

// GET all songs
router.get("/getall", async (req, res) => {
  try {
    const songs = await Song.find();
    console.log("Fetched songs:", songs);
    res.status(200).json(songs);
  } catch (err) {
    console.error("GET all failed:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET a song by ID
router.get("/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ message: "Song not found" });
    res.status(200).json(song);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID format" });
  }
});

// POST a new song
router.post("/add", async (req, res) => {
  try {
    const newSong = new Song(req.body);
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (err) {
    res.status(400).json({ error: "Invalid request" });
  }
});


// PUT (update) a song by ID
router.put("/update/:id", async (req, res) => {
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedSong)
      return res.status(404).json({ message: "Song not found" });
    res.status(200).json(updatedSong);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

// DELETE a song by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.id);
    if (!deletedSong)
      return res.status(404).json({ message: "Song not found" });
    res.status(200).json({ message: "Song deleted" });
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
});

module.exports = router;