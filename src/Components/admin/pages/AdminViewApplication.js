import { collection, onSnapshot, query, orderBy, where, getDoc, doc, updateDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../../../Firebase"
import { ClipLoader } from "react-spinners"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import moment from "moment"
export default function AdminViewApplication() {
    const [data,setData]=useState([])
    const [load,setLoad]=useState(true)
    const [selectedStatus,setselectedStatus]=useState(1)
    const [orderByDate,setOrderBy]=useState("desc")
    const [eventData,setEventData]=useState({})
    const {id}=useParams()
   const nav=useNavigate()
  
   useEffect(()=>{
    getData()
  },[id])
  const getData=async ()=>{
    if(!!id){
      const docRef=doc(db,"event",id)
      const docData=await getDoc(docRef)
      if(docData.exists()){
       setEventData(docData.data())

      }else{
        toast.error("No Data found!!")
      }
      setTimeout(()=>{setLoad(false)},2500)
    }
    else{
      toast.error("Please choose an event")
      nav("/event")
    }
  }
   
    useEffect(()=>{
      if(selectedStatus=="all"){
        var que=query(collection(db,"registration")
        , where("eventId","==",id)
        ,orderBy("createdAt",orderByDate)
        )
        }else{
          var que=query(collection(db,"registration")
          , where("status","==",parseInt(selectedStatus))
          , where("eventId","==",id)
            ,orderBy("createdAt",orderByDate)
          )
        }
        onSnapshot(que, doc=>{
          const registerData= doc.docs.map((el,index)=>{return {id:el.id, data:el.data()} })
          let userQuery=query(collection(db,"user"))
          onSnapshot(userQuery,doc=>{
            let userData=doc.docs.map((el,index)=>{
              return {id:el.id,data:el.data()}
            })
            console.log(userData);
            
            setData(registerData?.map(el => ({
              ...el,
              user: userData?.find(ev => ev.id === el.data.userId)
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
    const changeStatus=async (id, status)=>{
        if(window.confirm(`You are about to ${status==2?"Approve":status==3 && "Reject"} Application?`)){
          setLoad(true)
        const taskDocRef = doc(db, 'registration', id)
        try {
            let data = {
                status:status
            }
            await updateDoc(taskDocRef, data)
            toast.success("Updated Successfully!!")
            setTimeout(()=>{
                setLoad(false)
            },700)
        } catch (err) {
            setTimeout(()=>{
                setLoad(false)
            },700)
            toast.error("Something went wrong!")
        }
      }
    }
 
    return(
        <>
  {/* ======= Our Services Section ======= */}
  <section id="services" className="services sections-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Manage Application</h2>

        <p>
          for {eventData?.eventtitle}, Happening on {eventData?.eventdate}, Venue: {eventData?.venue}
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
              <option value={"asc"} >Oldest First</option>
            </select>
          </div>
        </div>
        <div className="row gy-4 " data-aos="fade-up" data-aos-delay={100}>
          {data?.length>0 ?
          data?.map((el,index)=>(
          <div className="col-lg-12 text-capitalize col-md-12" key={index}>
            <div className="service-item  position-relative">
                
                <h5>{el?.user?.data?.firstname} {el?.user?.data?.lastname}</h5>
                <p>{el?.user?.data?.email}</p>
                <p>{el?.user?.data?.qualification}- {el?.user?.data?.college}</p>
                <div className="text-danger">Date Of Application: {getDate(el?.data?.createdAt)}</div>
                <hr/>
                <div className="d-flex justify-content-between">
                    <h5>{el?.data?.status==1?"Pending":el?.data?.status==2?"Approved":"Rejected"}</h5>
                        {
                            el?.data?.status==1 && 
                            <div>
                                <button className="btn mx-1 btn-outline-success" onClick={()=>{changeStatus(el.id, 2)}}>Approve</button>
                                <button className="btn btn-outline-danger" onClick={()=>{changeStatus(el.id,3)}}>Decline</button>
                            </div>
                        }
                </div>
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