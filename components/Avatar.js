import Image from 'next/image';
const Avatar = ({ url, className }) => {
    return <img className='h-10 rounded-full transition duration-150 transform hover:scale-110 animate-spin' loading='lazy' alt='user-profile-picture' src={url} />;
}
export default Avatar;