import app from "./app.js";
import "dotenv/config";
import connectToDatabase from "#app/config/database.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server error:" + error.message);
    process.exitCode = 1;
  }
};

startServer();
