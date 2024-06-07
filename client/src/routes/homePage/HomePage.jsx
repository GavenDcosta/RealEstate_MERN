import React, { useContext } from 'react'
import "./homePage.scss"
import SearchBar from '../../components/searchBar/SearchBar'
import { AuthContext } from '../../context/AuthContext'

const HomePage = () => {

  const {currentUser} = useContext(AuthContext) 

  console.log(currentUser)

  return (
    <div className='homePage'>
        <div className="textContainer">
          <div className="wrapper">
            <h1 className='title'>
                Find Real Estate & Get Your Dream Place 
            </h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dolor eum omnis minus corrupti laudantium iure ad eveniet! Sit, sapiente.
            </p>
            <SearchBar />
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Expirence</h2>
                </div>

                <div className="box">
                    <h1>200+</h1>
                    <h2>Awards gained</h2>
                </div>
 
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}
 
export default HomePage
