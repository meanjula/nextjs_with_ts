'use client' //mark that the code runs on the client which is imported from server.
import React from 'react'

const AddToCart = () => {
  return (
    <div className='my-5'>
      <button className='btn btn-primary' onClick={()=>console.log('Click')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
