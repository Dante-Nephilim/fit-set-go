import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
