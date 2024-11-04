import { collection, getCountFromServer } from "firebase/firestore"
import React, { useEffect, useState } from 'react'
import { db } from "../../Firebase"
export default function Dashboard() {
  const [load,setLoad]=useState(true)
    const [user,setUser]=useState(0)
    const [theme,setTheme]=useState(0)
    const [event,setEvent]=useState(0)
    const [problem,setProblem]=useState(0)
    useEffect(()=>{
        getUserCount();
        getthemeCount();
        geteventCount();
        getproblemCount();
        setTimeout(()=>{setLoad(false)},1500)
    },[])
    const getUserCount=async ()=>{
        let ref=collection(db,"user")
        let que=await getCountFromServer(ref)
        console.log(que.data().count);
        setUser(que.data().count)
        
    }
    const getthemeCount=async ()=>{
        let ref=collection(db,"theme")
        let que=await getCountFromServer(ref)
        console.log(que.data().count);
        setTheme(que.data().count)
        
    }
    const geteventCount=async ()=>{
        let ref=collection(db,"event")
        let que=await getCountFromServer(ref)
        console.log(que.data().count);
        setEvent(que.data().count)
         }
         const getproblemCount=async ()=>{
          let ref=collection(db,"problem")
          let que=await getCountFromServer(ref)
          console.log(que.data().count);
          setProblem(que.data().count)
           }
  return (
    <>
    {/* ======= Hero Section ======= */}
  <section id="hero" className="hero">
    <div className="container position-relative hack">
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>
           HackWave
          </h2>
          <p>
          Welcome to Hackwave, where creativity meets technology! Hackwave is an exhilarating hackathon designed to bring together the brightest minds in tech to tackle real-world challenges through innovative solutions.
          </p>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <img
            src="/assets/img/hackathon 2.png"
            className="img-fluid"
            alt=""
            data-aos="zoom-out"
            data-aos-delay={100}
          />
        </div>
      </div>
    </div>
  </section>
  <div className={load==true?"d-none":"container my-5"}>
  <h1 className='text-center text-danger pb-3'>Dashboard</h1>
            <div className="row">
                <div className="col-md-4 p-3">
                    <div className="card p-3">
                        <h1 className="text-center">Total User</h1>
                        <h3 className="text-center">{user}</h3>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className="card p-3">
                        <h1 className="text-center">Total Theme</h1>
                        <h3 className="text-center">{theme}</h3>
                    </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className="card p-3">
                        <h1 className="text-center">Total Event</h1>
                        <h3 className="text-center">{event}</h3>
                    </div>
                </div>
                </div>
                <div className="col-md-4 p-3">
                    <div className="card p-3">
                        <h1 className="text-center">Total Problem</h1>
                        <h3 className="text-center">{problem}</h3>
                    </div>
            </div>
        </div>
  {/* End Hero Section */}
    </>
  )
}