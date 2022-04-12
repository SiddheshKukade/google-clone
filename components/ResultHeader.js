
import { Image } from 'next/image';
import { XIcon, MicrophoneIcon } from "@heroicons/react/solid"
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
const ResultHeader = () => {
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        //push the term on router
        router.push("/search?term=" + term);

    }
    const router = useRouter();
    const searchInputRef = useRef(null);
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center '>

                <img src="/google.png" height={40} width={120} onClick={() => router.push("/")} className="cursor-pointer" />
                <form className='flex px-6 py-3 ml-10 border flex-grow border-gray-200 rounded-full shadow-lg max-w-3xl items-center '>
                    <input
                        className="flex-grow w-full focus:outline-none "
                        type="text"
                        ref={searchInputRef}
                    />
                    <XIcon
                        onClick={() => searchInputRef.current.value = ''}
                        className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                    />
                    <MicrophoneIcon
                        className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4  ml-3 border-gray-300  "
                    />
                    <button hidden type="submit" onClick={search} >Search</button>
                </form>
                <Avatar className="ml-auto" url="https://avatars.githubusercontent.com/u/65951872?v=4" />

            </div>
        </header>
    )
}

export default ResultHeader