import React from 'react'

const SearchPlayer = ({ setShowDetails }) => {
    return (
        <div className='mt-48 flex gap-2 justify-center '>
            <div>
                <h3>Search</h3>
                <input type='text' className='border-2' />
            </div>
            <div className='mt-6'>
                <button onClick={() => setShowDetails(true)} className='border-2 bg-teal-500'>Check Details</button>
            </div>
        </div>
    )
}

export default SearchPlayer