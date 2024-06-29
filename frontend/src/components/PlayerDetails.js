import React from 'react'

const PlayerDetails = ({ setShowDetails, playerDetails, setDetails }) => {

    if (!playerDetails) {
        setShowDetails(false)
    }

    const onPlayerDetailEditHandler = () => {
        setDetails(playerDetails)
        setShowDetails(false)
    }


    return (
        <div className='flex'>
            <div className='w-[30%] border-2 h-[100vh] bg-teal-200'>
                <div className='flex  justify-around mt-2'>
                    <h2>{playerDetails?.name}</h2>
                    <img src={playerDetails?.PhotoUrl} alt='playerImage' />
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>Dob</h2>
                    <p>{playerDetails?.Dob}</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>BirthPlace</h2>
                    <p>{playerDetails?.BirthPlace}</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>matches</h2>
                    <p>{playerDetails?.Matches}</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>Score</h2>
                    <p>{PlayerDetails?.score}</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>fifties</h2>
                    <p>{playerDetails?.fifties}</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>centuries</h2>
                    <p>{playerDetails?.centuries}</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>wickets</h2>
                    <p>{playerDetails?.wickets}</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>Average</h2>
                    <p>{playerDetails?.average}</p>
                </div>
            </div>
            <div className='w-[70%] border-2 h-[100vh] bg-teal-500'>
                <div>
                    <button onClick={onPlayerDetailEditHandler} className='float-end bg-orange-500 mr-10 mt-3'>Edit</button>
                </div>
                <div className='flex justify-center items-center mt-44'>
                    <p>{playerDetails?.career}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetails