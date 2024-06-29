const PlayerData = require("../models/playerModel");

const addPlayer = async (req, res) => {
    const { name,
        Dob,
        PhotoUrl,
        BirthPlace,
        Matches,
        score,
        career,
        fifties,
        centuries,
        wickets,
        average } = req.body;
    try {

        if (!name ||
            !Dob ||
            !PhotoUrl ||
            !BirthPlace ||
            !Matches ||
            !score ||
            !career ||
            !fifties ||
            !centuries ||
            !wickets ||
            !average) {
            return res.status(400).json({ error: "All fields mendatory" });
        }

        const newPlayer = await PlayerData.create({
            name: "Abhshek",
            Dob: "15",
            PhotoUrl: "15",
            BirthPlace: "15454",
            Matches: "Abhshek",
            score: "Abhshek",
            career: "Abhshek",
            fifties: "Abhshek",
            centuries: "Abhshek",
            wickets: "Abhshek",
            average: "Abhshek",

        });
        return res
            .status(201)
            .json({ message: "User created successfully", newPlayer });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = addPlayer;