import bodyParser from "body-parser";
import express from "express";

import routes from "./routes/index.js";
import swaggerDocs from "./config/swagger.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => {
  swaggerDocs(app, PORT);
  console.log(`Server is running on http://localhost:${PORT}`);
});
