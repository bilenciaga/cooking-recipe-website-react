import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Seachbar() {

    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/search?q=${term}`)
    }
    
    return (
    <div className="">
        <form className='flex items-center' onSubmit={handleSubmit}>
            <label className='text-xl' htmlFor="search">Search:</label>
            <input 
                className='ml-2 p-3 pr-20 mr-5 border border-black rounded-md text-black text-lg'
                id="search" 
                type="text" 
                onChange={(e) => setTerm(e.target.value)} 
                required 
            />
        </form>
    </div>
)
}

export default Seachbar