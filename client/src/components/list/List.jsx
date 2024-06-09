import React from 'react'
import "./list.scss"
import Card from "../card/Card"
import { listData } from "../../lib/dummydata"

const List = ({ posts, isProfilePage }) => {

  return (
    <div className='list'>
        {posts.map((item) => (
            <Card isProfile={isProfilePage ? true : false} key={item.id} item={item} />
        ))}
    </div>
  )
}

export default List