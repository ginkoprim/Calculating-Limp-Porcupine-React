import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Calculating Limp Porcupine</title>
        <meta property="og:title" content="Calculating Limp Porcupine" />
      </Helmet>
    </div>
  )
}

export default Home
