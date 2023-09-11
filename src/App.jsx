import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  
  return (
    <>
      <div className='max-w-screen-lg mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
