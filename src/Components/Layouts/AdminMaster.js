import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import { toast } from 'react-toastify'
import AdminFooter from './AdminFooter'

export default function AdminMaster() {
  const nav=useNavigate()
  let userId=sessionStorage.getItem("userId")
  let userType=sessionStorage.getItem("userType")
  if(!userId || userType!=1){
    toast.error("Please login")
    nav("/login")
  }
  return (
    <>
      <AdminHeader/>
      <div style={{minHeight:"70vh"}}>
        <Outlet/>
      </div>
      <AdminFooter/>
    </>

  )
}
