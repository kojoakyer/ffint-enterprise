import React from 'react'
import Gallery from '../../component/gallery/Gallery'
import Header from '../../component/header/Header'
import Herosection from '../../component/herosection/Herosection'
import Midsection from '../../component/midsection/Midsection'
import Progress from '../../component/progress/Progress'
import Titlesection from '../../component/titlesection/Titlesection'
import Values from '../../component/values/Values'

const Home = () => {
  return (
    <div >
        <Header/>
        <Titlesection/>
        <Herosection/>
        <Midsection/>
        <Progress/>
        <Gallery/>
        <Values/>
    </div>
  )
}

export default Home