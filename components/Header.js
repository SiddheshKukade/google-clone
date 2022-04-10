import Avatar from './Avatar';
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
const Header = () => {
    return (
        <header className="flex w-full justify-between p-5 text-gray-700 tet-sm ">
            <div className=" flex space-x-4 items-center ">
                {/* left */}
                <p className="link">About</p>
                <p className="link">Store</p>
            </div>
            {/* right */}
            <div className="flex space-x-4 items-center ">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
                <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 " />

                <Avatar url="https://avatars.githubusercontent.com/u/65951872?v=4" />
            </div>
        </header>
    );
}
export default Header;