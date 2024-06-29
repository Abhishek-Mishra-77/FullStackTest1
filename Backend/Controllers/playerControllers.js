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
    const { id } = req.params; // Assuming the player ID is passed as a URL parameter
    const {
        name,
        Dob,
        PhotoUrl,
        BirthPlace,
        Matches,
        score,
        career,
        fifties,
        centuries,
        wickets,
        average,
    } = req.body.details;


    try {
        // Find the player by ID
        const player = await PlayerData.findByPk(id);
        if (!player) {
            return res.status(404).json({ error: "Player not found" });
        }

        // Update player details
        player.name = name || player.name;
        player.Dob = Dob || player.Dob;
        player.PhotoUrl = PhotoUrl || player.PhotoUrl;
        player.BirthPlace = BirthPlace || player.BirthPlace;
        player.Matches = Matches || player.Matches;
        player.score = score || player.score;
        player.career = career || player.career;
        player.fifties = fifties || player.fifties;
        player.centuries = centuries || player.centuries;
        player.wickets = wickets || player.wickets;
        player.average = average || player.average;

        // Save changes
        await player.save();

        return res.status(200).json({ message: "Player updated successfully", player });
    } catch (error) {
        console.error("Error updating player:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { addPlayer, getAllPlayer, updatePlayer };