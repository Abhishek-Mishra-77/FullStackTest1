import React, { useState } from 'react'
import FormPage from './FormPage'
import SearchPlayer from './SearchPlayer'
import PlayerDetails from './PlayerDetails'

const DetailsPage = () => {

    const [details, setDetails] = useState({
        name: "",
        dob: "",
        photoUrl: "",
        birthPlace: "",
        matches: "",
        score: "",
        career: "",
        fifties: "",
        centuries: "",
        wickets: "",
        average: ""
    })
    const [showDetails, setShowDetails] = useState(false)

    const onSubmitDetailsHandler = (e) => {
        e.preventDefault();
        console.log(details)
    }

    return (
        <div>
            {!showDetails ? <div className='flex flex-col justify-center'>
                <FormPage
                    onSubmitDetailsHandler={onSubmitDetailsHandler}
                    details={details}
                    setDetails={setDetails}
                />

                <SearchPlayer showDetails={showDetails} setShowDetails={setShowDetails} />

            </div> : <PlayerDetails setShowDetails={setShowDetails} />}
        </div>
    )
}

export default DetailsPage