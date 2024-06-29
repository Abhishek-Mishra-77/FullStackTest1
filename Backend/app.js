const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const database = require("./utils/database");

const PlayerRoutes = require("./routes/playerRoutes")

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))


app.use("/" , PlayerRoutes);

database.sync({ force: false })
    .then((async () => {
        console.log(`Database connected successfully.`);
    }))

app.listen(4000, () => {
    console.log(`Server running on 4000 port`);
})
