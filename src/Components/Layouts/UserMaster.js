import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from './UserHeader'

export default function UserMaster() {
  return (
    <>
      <UserHeader/>
      <Outlet/>
    </>
  )
}
