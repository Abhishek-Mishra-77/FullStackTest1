import React, { useState } from 'react'

const SearchPlayer = ({ setShowDetails, onSearchPlayerHandler }) => {

    const [name, setName] = useState("");

    const onFindHandler = (e) => {
        e.preventDefault();
        onSearchPlayerHandler(name)
        setShowDetails(true)
        setName("");
    }


    return (
        <form className='mt-48 flex gap-2 justify-center '>
            <div>
                <h3>Search</h3>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' className='border-2' />
            </div>
            <div className='mt-6'>
                <button onClick={onFindHandler} className='border-2 bg-teal-500'>Check Details</button>
            </div>
        </form>
    )
}

export default SearchPlayer