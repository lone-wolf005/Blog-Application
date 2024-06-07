import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button
     className='inline-bock px-6 font-bold text-lg py-2 text-white duration-200 hover:text-sky-500'
     onClick={logoutHandler}
    >LOGOUT</button>
  )
}

export default LogoutBtn