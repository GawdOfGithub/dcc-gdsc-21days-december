import React from 'react'
import useApiStore from '../api/ApiStore'
const Display = () => {
    const {responseData} = useApiStore()
    console.log(responseData);
  return (
    <div className='text-[100px]'>{responseData}</div>
  )
}

export default Display