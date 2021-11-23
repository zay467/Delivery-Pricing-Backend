import express from "express";

const app: express.Application = express();

const PORT: number = 8000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}.`));
