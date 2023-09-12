import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  //handle bookmark
  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  //handle reading time
  const [readingTime, setReadingTime] = useState(0)
  const handleMarkAsRead = (time) =>{
    setReadingTime(readingTime + time)
  }
  return (
    <>
      <div className='max-w-screen-lg mx-auto'>
        <Header></Header>
        <div className='md:flex gap-4'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
