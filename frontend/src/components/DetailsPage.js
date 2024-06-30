import React, { useEffect, useState } from 'react'
import FormPage from './FormPage'
import SearchPlayer from './SearchPlayer'
import PlayerDetails from './PlayerDetails'
import axios from 'axios'

const DetailsPage = () => {

    const [details, setDetails] = useState({
        name: "",
        Dob: "",
        PhotoUrl: "",
        BirthPlace: "",
        Matches: "",
        score: "",
        career: "",
        fifties: "",
        centuries: "",
        wickets: "",
        average: ""
    })
    const [allPlayer, setAllPlayer] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const [playerDetails, setPlayerDetails] = useState(null)


    useEffect(() => {
        const onGetAllPlayerHandler = async () => {
            try {
                const response = await axios.get("http://localhost:4000/get");
                setAllPlayer(response?.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        onGetAllPlayerHandler()
    }, [showDetails])

    const onSubmitDetailsHandler = async (e) => {
        e.preventDefault();
        try {

            if (playerDetails) {

                const response = await axios.put(`http://localhost:4000/update/${playerDetails?.id}`, { details: details })
                console.log(response)
            }
            else {
                const response = await axios.post("http://localhost:4000/add", { details })
                console.log(response)

            }


            setDetails((prev) => ({
                ...prev,
                name: "",
                Dob: "",
                PhotoUrl: "",
                BirthPlace: "",
                Matches: "",
                score: "",
                career: "",
                fifties: "",
                centuries: "",
                wickets: "",
                average: ""
            }))
            setPlayerDetails(null)
        }
        catch (error) {
            console.log(error)
        }
    }

    const onSearchPlayerHandler = (name) => {
        if (!name) {
            return;
        }
        const selectedPlayer = allPlayer.find((player) => player.name === name);
        console.log(selectedPlayer)
        setPlayerDetails(selectedPlayer)
    }

    return (
        <div>
            {!showDetails ? <div className='flex flex-col justify-center'>
                <FormPage
                    onSubmitDetailsHandler={onSubmitDetailsHandler}
                    details={details}
                    setDetails={setDetails}
                />

                <SearchPlayer onSearchPlayerHandler={onSearchPlayerHandler} showDetails={showDetails} setShowDetails={setShowDetails} />

            </div> : <PlayerDetails setDetails={setDetails} playerDetails={playerDetails} setShowDetails={setShowDetails} />}
        </div>
    )
}

export default DetailsPage