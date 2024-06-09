import React, { useContext, useEffect, Suspense } from 'react'
import "./profilePage.scss"
import List from "../../components/list/List"
import Chat from '../../components/chat/Chat'
import apiRequest from '../../lib/apiRequest'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext.jsx"
import { Await } from 'react-router-dom'


const ProfilePage = () => {

    const data = useLoaderData()

    const {updateUser, currentUser} = useContext(AuthContext)
    
    const navigate = useNavigate()

    // useEffect(() => {
    //     if(!currentUser){
    //         navigate("/login")
    //     }
    // }, [currentUser, navigate])


    const handleLogout = async () => {
        try{
            await apiRequest.post("/auth/logout")
            //localStorage.removeItem("user")
            updateUser(null)
            navigate("/")
            
        }catch(error){
            console.log(error)
        }
    }

  return (
        <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                 <div className="title">
                    <h1>User Informaion</h1>
                    <Link to="/profile/update">
                      <button>Update Profile</button>
                    </Link> 
                 </div>
                 <div className="info">
                    <span>
                        Avatar: <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
                    </span>
                    <span>
                        Username: <b>{currentUser.username}</b>
                    </span>
                    <span>
                        Email: <b>{currentUser.email}</b>
                    </span>
                    <button onClick={handleLogout}>Logout</button>
                 </div>
                 <div className="title">
                    <h1>My List</h1>
                    <Link to="/add">
                      <button>Create New Post</button>
                    </Link>
                 </div>
                 <Suspense fallback={<p>Loading...</p>}>
                    <Await
                      resolve={data.postResponse}
                      errorElement={
                        <p>Error loading Posts!</p>
                      }
                    >
                      {(postResponse) =>   <List isProfilePage posts={postResponse.data.userPosts} />}
                    </Await>
                
                 </Suspense>
               
                 <div className="title">
                    <h1>Saved List</h1>
                 </div>
                 <Suspense fallback={<p>Loading...</p>}>
                    <Await
                      resolve={data.postResponse}
                      errorElement={
                        <p>Error loading Posts!</p>
                      }
                    >
                      {(postResponse) =>   <List isProfilePage posts={postResponse.data.savedPosts} />}
                    </Await>
                
                 </Suspense>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                  <Suspense fallback={<p>Loading...</p>}>
                    <Await
                      resolve={data.chatResponse}
                      errorElement={
                        <p>Error loading Chats!</p>
                      }
                    >
                      {(chatResponse) =>  <Chat chats={chatResponse.data} />}
                    </Await>
                 </Suspense>
            </div>
        </div>
    </div>
    )
}

export default ProfilePage