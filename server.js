import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import connectToMongoDB from "./db/db.js";
import noteRouter from "./routes/note.js";
const app = express();
const PORT = 9000;

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);

// Connect to database
connectToMongoDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
