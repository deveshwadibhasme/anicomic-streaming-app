import React from 'react'
import Carousel from '../components/Carousel'
import image from '../assets/nightmare-bg.png'

const Home = () => {
  return (
    <div className='max-w-screen min-h-screen w-full mx-auto'>
      <Carousel slides={[image]}/>
    </div>
  )
}

export default Home