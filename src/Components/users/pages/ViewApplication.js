import { collection, onSnapshot, query, orderBy, where, getDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../../../Firebase"
import { ClipLoader } from "react-spinners"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import moment from "moment"
export default function ViewApplication() {
    const [data,setData]=useState([])
    const [load,setLoad]=useState(true)
    const [selectedStatus,setselectedStatus]=useState("all")
    const [orderByDate,setOrderBy]=useState("desc")
   const nav=useNavigate()
  
    const userId=sessionStorage.getItem("userId")
    if(!userId){
        toast.error("Please login")
        nav("/login")
    }
   
    useEffect(()=>{
      if(selectedStatus=="all"){
        var que=query(collection(db,"registration")
        , where("userId","==",userId)
        ,orderBy("createdAt",orderByDate)
        )
        }else{
          var que=query(collection(db,"registration")
          , where("status","==",parseInt(selectedStatus)),
            where("userId","==",userId)
            ,orderBy("createdAt",orderByDate)
          )
        }
       
        onSnapshot(que, doc=>{
          const registerData= doc.docs.map((el,index)=>{return {id:el.id, data:el.data()} })
          let eventQuery=query(collection(db,"event"))
          onSnapshot(eventQuery,doc=>{
            let eventData=doc.docs.map((el,index)=>{
              return {id:el.id,data:el.data()}
            })
            setData(registerData?.map(el => ({
              ...el,
              event: eventData?.find(ev => ev.id === el.data.eventId)
            })))
          })
        })
        setTimeout(()=>{setLoad(false)},500)
    },[selectedStatus, orderByDate])
    const getDate=(date)=>{
      let date1=date?.toDate()?.toString()
      let newDate=moment(date1)?.format("Do MMM, YYYY")
      return newDate
    }
    return(
        <>
  {/* ======= Our Services Section ======= */}
  <section id="services" className="services sections-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Application</h2>
        <p>
          Here are the events you have applied in.
        </p>
      </div>
      <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
      <div className={load==true?"d-none":"container bg-light  text-capitalize"}>
        <div className="row py-3 justify-content-between gy-4" data-aos="fade-up" data-aos-delay={100} >
          <div className="col-md-3">
            <label>Change Status</label>
            <select value={selectedStatus} onChange={(e)=>{setselectedStatus(e.target.value)}} className="form-control">
              <option value={"all"} selected>All</option>
              <option value={1}>Pending</option>
              <option value={2}>Approved</option>
              <option value={3}>Declined</option>
            </select>
          </div>
          <div className="col-md-3">
            <label>Order By</label>
            <select value={orderByDate} onChange={(e)=>{setOrderBy(e.target.value)}} className="form-control">
              <option value={"desc"} selected>Newest First</option>
              <option value={"asc"} selected>Oldest First</option>
            </select>
          </div>
        </div>
        <div className="row gy-4 " data-aos="fade-up" data-aos-delay={100}>
          {data?.length>0 ?
          data?.map((el,index)=>(
          <div className="col-lg-12 text-capitalize col-md-12" key={index}>
            <div className="service-item  position-relative">
              <h4>{el?.event?.data?.eventtitle}</h4>
             
              <div className="d-flex justify-content-between ">
                <div className="text-danger">Date Of Application: {getDate(el?.data?.createdAt)}</div>
                <div className="text-danger">Event Date: {el?.event?.data?.eventdate} <i className="bi bi-clock"> </i>{el?.event?.data?.time}</div>
              </div>
              <div>{el?.event?.data?.venue}</div>
              <hr/>
              <h5>Status is {el?.data?.status==1?"Pending Yet!!":el?.data?.status==2?"Approved!!":"Oops!! Due to some reason Your application is rejected. "}</h5>
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