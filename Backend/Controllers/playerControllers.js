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
        average } = req.body?.details;
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
            name: name,
            Dob: Dob,
            PhotoUrl: PhotoUrl,
            BirthPlace: BirthPlace,
            Matches: Matches,
            score: score,
            career: career,
            fifties: fifties,
            centuries: centuries,
            wickets: wickets,
            average: average,

        });
        return res
            .status(201)
            .json({ message: "Player created successfully", newPlayer });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const getAllPlayer = async (req, res) => {
    try {
        const players = await PlayerData.findAll();
        return res.status(200).json(players);
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const updatePlayer = async (req, res) => {
    try {

    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports = { addPlayer, getAllPlayer, updatePlayer };