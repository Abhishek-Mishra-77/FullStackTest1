import React from 'react'

const FormPage = ({
    onSubmitDetailsHandler,
    details,
    setDetails,
}) => {


    return (
        <div>
            <form onSubmit={onSubmitDetailsHandler} className='flex flex-wrap justify-center items-center mt-10 gap-2'>
                <div>
                    <h3>Name</h3>
                    <input value={details.name} onChange={(e) => setDetails((prev) => ({ ...prev, name: e.target.value }))} type='text' className='border-2' />
                </div>
                <div>
                    <h3>Dob</h3>
                    <input value={details.dob} onChange={(e) => setDetails((prev) => ({ ...prev, dob: e.target.value }))} type='date' className='border-2' />
                </div>
                <div>
                    <h3>Photo URl</h3>
                    <input value={details.photoUrl} onChange={(e) => setDetails((prev) => ({ ...prev, photoUrl: e.target.value }))} type='text' className='border-2' />
                </div>
                <div>
                    <h3>BirthPlace</h3>
                    <input value={details.birthPlace} onChange={(e) => setDetails((prev) => ({ ...prev, birthPlace: e.target.value }))} type='text' className='border-2' />
                </div>
                <div>
                    <h3>Matches</h3>
                    <input value={details.matches} onChange={(e) => setDetails((prev) => ({ ...prev, matches: e.target.value }))} type='text' className='border-2' />
                </div>
                <div>
                    <h3>score</h3>
                    <input value={details.score} onChange={(e) => setDetails((prev) => ({ ...prev, score: e.target.value }))} type='text' className='border-2' />
                </div>
                <div>
                    <h3>career</h3>
                    <input value={details.career} onChange={(e) => setDetails((prev) => ({ ...prev, career: e.target.value }))} type='text' className='border-2' />
                </div>
                <div>
                    <h3>fifties</h3>
                    <input value={details.fifties} onChange={(e) => setDetails((prev) => ({ ...prev, fifties: e.target.value }))} type='text' className='border-2' />
                </div>
                <div>
                    <h3>centuries</h3>
                    <input value={details.centuries} onChange={(e) => setDetails((prev) => ({ ...prev, centuries: e.target.value }))} type='text' className='border-2' />
                </div>
                <div>
                    <h3>wickets</h3>
                    <input value={details.wickets} onChange={(e) => setDetails((prev) => ({ ...prev, wickets: e.target.value }))} type='text' className='border-2' />
                </div>
                <div>
                    <h3>Average</h3>
                    <input value={details.average} onChange={(e) => setDetails((prev) => ({ ...prev, average: e.target.value }))} type='text' className='border-2' />
                </div>
                <div className='mt-6'>
                    <button className='border-2 bg-teal-500'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormPage