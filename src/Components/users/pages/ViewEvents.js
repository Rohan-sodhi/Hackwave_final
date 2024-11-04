import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../../../Firebase"
import { ClipLoader } from "react-spinners"
import { Link } from "react-router-dom"
import moment from "moment"
export default function ViewEvents() {
    const [load,setLoad]=useState(true)
    const [allEvent,setAllEvent]=useState([])
    const currentDate=moment().format("YYYY-MM-DD") 
    useEffect(()=>{
      const que=query(collection(db,"event")
      ,where("status","==",true),where("eventdate",">=",currentDate),
      orderBy("createdAt","desc")
      )
      onSnapshot(que, doc=>{
          setAllEvent(
              doc.docs.map((el,index)=>{
                  return {id:el.id, data:el.data()} 
              })
          )
      })
      setTimeout(()=>{setLoad(false)},2500)
  },[])
    return(
        <>
  {/* ======= Our Services Section ======= */}
  <section id="services" className="services sections-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Upcoming Events</h2>
        <p>
          Here are the Upcoming events, you can Register yourself in.
        </p>
      </div>
      <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
      <div className={load==true?"d-none":"container bg-light  text-capitalize"}>
        <div className="row gy-4 " data-aos="fade-up" data-aos-delay={100}>
          {allEvent?.length>0 ?
          allEvent?.map((el,index)=>(
          <div className="col-lg-4 text-center text-capitalize col-md-6" key={index}>
            <div className="service-item p-3 position-relative">
                <img src={el?.data?.image} className="w-100" style={{height:"200px"}}/>
                
                <h5 className="my-2">{el?.data?.eventtitle}</h5>
                <div className="text-dark">Happening On : {el?.data?.eventdate} 
                   <i className="mx-1 bi bi-clock"></i>{el?.data?.time}
                </div>
                <div className="text-danger">Last Date to Apply: {el?.data?.regDate}</div>
                <div>Venue : {el?.data?.venue}</div>
                <Link to={"/viewEventDetails/"+el.id} className="btn btn-outline-danger mx-auto d-block">View</Link>
            </div>
          </div>
          )) :
          <h1>No Data Found!!</h1>  
          }
        </div>
      </div>
    </div>
  </section>
  {/* End Our Services Section */}


        </>
    )
}