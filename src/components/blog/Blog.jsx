import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog
    return (
        <div className='mt-4 space-y-4 border-b-2 flex flex-col p-4 mb-4 md:mb-8'>
            <img src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <img src={author_img} alt="" className='w-12' />
                    <div>
                        <h4 className='text-xl font-semibold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-2' onClick={() => handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hashtag, index) => <span key={index}><a href="">#{hashtag}</a> </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-left underline text-purple-600 font-semibold'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;