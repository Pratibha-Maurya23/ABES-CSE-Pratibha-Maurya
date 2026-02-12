import React from 'react'
import Navbar from './Navbar'
import Book from './Book'
import About from './About'

const Home = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Book Store
        </h1>
        <div className="flex flex-wrap justify-center items-start gap-8">
          <Book title="Physics" price="600" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGrvivmAtwpuVN7BKchYTp1Ps0WL_ywr2hQ&s"/>
          <Book title="Math" price="600" img="https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid&w=740&q=80"/>
          <Book title="Chemeistry" price="600" img="https://i.ytimg.com/vi/5iTOphGnCtg/maxresdefault.jpg"/>
        </div>
      </div>
      <About />
    </div>
  )
}

export default Home
