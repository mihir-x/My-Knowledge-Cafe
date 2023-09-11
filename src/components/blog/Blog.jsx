import PropTypes from 'prop-types'

const Blog = ({blog}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog
    return (
        <div className='mt-4 space-y-4'>
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
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hashtag, index) => <span key={index}><a href="">#{hashtag}</a> </span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;