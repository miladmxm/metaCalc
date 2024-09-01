import dotEnv from "dotenv";

import connectDB from "./db/connect.js";
import createServer from "./utils/createServer.js";

dotEnv.config();
connectDB();

const app = createServer()
const PORT = process.env.PORT || 7000;
app.listen(PORT, "0.0.0.0", function () {
  console.log(`server is running on port:${PORT}`);
});
