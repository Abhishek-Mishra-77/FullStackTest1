import React from 'react'

const PlayerDetails = ({ setShowDetails }) => {
    return (
        <div className='flex'>
            <div className='w-[30%] border-2 h-[100vh] bg-teal-200'>
                <div className='flex  justify-around mt-2'>
                    <h2>Name</h2>
                    <img src='' alt='playerImage' />
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>Dob</h2>
                    <p>Jan02222</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>BirthPlace</h2>
                    <p>Bhadohi</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>matches</h2>
                    <p>21</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>Score</h2>
                    <p>20000</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>fifties</h2>
                    <p>20</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>centuries</h2>
                    <p>30</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>wickets</h2>
                    <p>10</p>
                </div>
                <div className='flex justify-around mt-2'>
                    <h2>Average</h2>
                    <p>30</p>
                </div>
            </div>
            <div className='w-[70%] border-2 h-[100vh] bg-teal-500'>
                <div>
                    <button onClick={() => setShowDetails(false)} className='float-end bg-orange-500 mr-10 mt-3'>Edit</button>
                </div>
                <div className='flex justify-center items-center mt-44'>
                    <p>jnenfeneebeu</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetails