import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'
import { useEffect } from 'react'

function App() {
  const [blogs, setBlogs] = useState([])
  //load data 
  useEffect(() =>{
    fetch('./blogs.json').then(res => res.json()).then(data => setBlogs(data))
  },[]) //dependency empty array means we are gonna load the data only once right after initial render
  console.log(blogs)
  return (
    <>
      <Header></Header>
      <Blogs></Blogs>
    </>
  )
}

export default App
