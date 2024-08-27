import React from 'react'

export default function Bai2() {
  return (
    <div className='ml-5'>Bài 2
        <p>Input Label</p>
        <input type="text" className='border border-blue-600 rounded w-80'/>
        <br />
        <div className='border border-blue-200 rounded mt-3 w-80'>  
            <label htmlFor="" className='font-bold'>Label</label>
            <input type="checkbox" className='ml-60' />
<br />
            <label htmlFor="" className='font-bold'>Label</label>
            <input type="checkbox" className='ml-60' />
<br />
            <label htmlFor="" className='font-bold'>Label</label>
            <input type="checkbox" className='ml-60' />
<br />
            <label htmlFor="" className='font-bold'>Label</label>
            <input type="checkbox" className='ml-60' />
            <br />
            <button className='border border-blue-200 rounded w-28 ml-3'>Clear</button>
            <button className='border border-blue-200 rounded w-28 ml-16 bg-blue-600 text-white'>Apply</button>
        </div>
    </div>
  )
}
