import React, { useEffect, useState } from 'react'

const Header = ({ changeUser }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
    setUser(null)
    // window.location.reload() // optional
  }

  const employees = JSON.parse(localStorage.getItem('loggedInUser')) || []
  console.log('Logged in user:', employees.data.firstName)

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>
          {employees.data.firstName || 'Admin'} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
