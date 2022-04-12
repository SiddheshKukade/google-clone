import Image from 'next/image';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/outline'
import { useRef } from 'react';
import { useRouter } from 'next/router';

const Body = () => {
    const searchInputRef = useRef(null);
    const router = useRouter()
    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value

        if (!term) return
        router.push(`/search?term=${term}`)


    }
    return (
        <form className='flex flex-col items-center flex-grow w-4/5 mx-auto'>
            <img
                loading='lazy'
                alt="google log"
                src='/google.png' height={100} width={300} />
            <div className=' mb-4 flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
                <SearchIcon className='h-5 mr-3 text-gray-500' />
                <input ref={searchInputRef} type="text" placeholder="Search" className='focus:outline-none flex-grow ' />
                <MicrophoneIcon className='h-5' />
            </div>
            <div className='flex flex-col w-1/2 space-y-2 justify-center  sm:space-y-8 sm:flex-row sm:space-x-4'>
                <button onClick={search} className="btn mt-8">Google Search </button>
                <button className="btn" onClick={search}>I'm Feeling Lucky</button>
            </div>
        </form>

    )
}

export default Body