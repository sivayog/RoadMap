const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import CORS
const posts = require("./routes/post");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error");

const app = express();
const port = process.env.PORT || 8000;

// Enable CORS
app.use(cors({ origin: "http://localhost:5173" })); // Allow frontend to access backend

// Middleware
app.use(logger.logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/blogDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// API Routes
app.use("/api/posts", posts);

// Error Handling Middleware
app.use(errorHandler.error);

// Catch-all Route for 404 Errors
app.use((req, res) => {
  res.status(404).json({ error: "Page not found" });
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
