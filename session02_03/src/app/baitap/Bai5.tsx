import React from 'react'
import "../css/bai5.scss"
export default function Bai5() {
  return (
    <div className='container'>Bài 5
      <div className='main'>
        <p className='hi'>!</p>
        <p className='p1'>Delete blog post</p>
        <p className='p2'>Are you sure you want to delete this post? This <br /> actione cannot be undone</p>
        <button className='btn1'>Cancel</button>
        <button className='btn2'>Delete</button>

      </div>
    </div>
  )
}
