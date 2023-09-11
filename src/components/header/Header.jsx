import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-5 md:pt-10 border-b-2'>
            <h1 className="text-2xl md:text-4xl font-semibold text-purple-500">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;