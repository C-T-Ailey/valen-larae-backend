const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: "https://www.valenlaraeart.com"
})
);

const PORT = process.env.PORT;

const humansRouter = require("./routes/humans");
const authRouter = require("./routes/auth");
const eventsRouter = require("./routes/events");
const imagesRouter = require("./routes/images");

app.use("/", humansRouter);
app.use("/", authRouter);
app.use("/", eventsRouter);
app.use("/", imagesRouter);

app.listen(PORT, () => console.log(`Backend application running on port ${PORT}`));

mongoose.connect(process.env.mongoDBURL,
    {useNewUrlParser: true},
    () => {
        console.log('MongoDB connected')
    });