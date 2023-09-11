import { useState } from 'react'
import { useEffect } from 'react'
import Blog from '../blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    //load data 
    useEffect(() => {
        fetch('./blogs.json').then(res => res.json()).then(data => setBlogs(data))
    }, []) //dependency empty array means we are gonna load the data only once right after initial render
    console.log(blogs)
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;