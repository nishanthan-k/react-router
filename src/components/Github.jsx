import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  return (
    <div className='min-h-20 w-screen flex justify-center items-center mt-5'>
      <table className='w-7/12 border'>
        <tbody >
          <tr>
            <th className='text-lg font-semibold text-left'>Username</th>
            <td>{data.login}</td>
          </tr>
          <tr>
            <th className='text-lg font-semibold text-left'>Total Public Repos</th>
            <td>{data.public_repos}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export const getGithubData = async () => {
  const data = await fetch("https://api.github.com/users/nishanthan-k")
  return data.json()
}

export default Github