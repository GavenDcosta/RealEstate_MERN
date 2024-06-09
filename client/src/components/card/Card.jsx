import React from 'react'
import { Link } from 'react-router-dom'
import "./card.scss"
import { useLoaderData } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import apiRequest from '../../lib/apiRequest'

const Card = ({item, isProfile}) => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(item.isSaved);
  const { currentUser } = useContext(AuthContext);

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: item.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className='card'>
      <Link to={`/${item.id}`} className="imageContainer">
          <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className='title'>
          <Link  to={`/${item.id}`} >{item.title}</Link>
        </h2>
        <p className='address'>
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className='price'>$ {item.price}</p>
        <div className="bottom">
          <div className="features">
             <div className="feature">
               <img src="/bed.png" alt="" />
               <span>{item.bedroom} bedroom</span>
             </div>
             <div className="feature">
               <img src="/bath.png" alt="" />
               <span>{item.bathroom} bathroom</span>
             </div>
          </div>
          <div className="icons">
              {
                !isProfile && (
                  <div className="icon" 
                   onClick={handleSave}
                   style={{
                     backgroundColor: saved ? "#fece51" : "white",
                   }}>
                       <img src="/save.png" alt="" />
                  </div>
                )
              }
              <div className="icon">
                  <img src="/chat.png" alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card