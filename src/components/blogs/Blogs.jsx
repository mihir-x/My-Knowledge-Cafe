import { useState } from 'react'
import { useEffect } from 'react'
import Blog from '../blog/Blog';
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    //load data 
    useEffect(() => {
        fetch('./blogs.json').then(res => res.json()).then(data => setBlogs(data))
    }, []) //dependency empty array means we are gonna load the data only once right after initial render
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blogs;