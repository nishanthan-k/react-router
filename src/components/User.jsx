import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const params = useParams()
  
  return (
    <div className='min-h-20 flex justify-center items-center mt-5'>
      <div className='w-11/12 p-2 border-2'>
        <p>User: {params.userId ? params.userId : "Undefined"} </p>
      </div>
    </div>
  )
}

export default User