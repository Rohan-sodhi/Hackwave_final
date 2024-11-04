import { collection, onSnapshot, query, orderBy, updateDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { ClipLoader } from "react-spinners"
import moment from "moment"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
export default function ManageEvent(){
    const [data,setData]=useState([])
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        const que=query(collection(db,"event")
        // , where("categoryName","==","test")
        // ,limit(5)
        ,orderBy("createdAt","desc")
    )
        onSnapshot(que, doc=>{
            setData(
                doc.docs.map((el,index)=>{
                    return {id:el.id, data:el.data()} 
                })
            )
        })
       setTimeout(()=>{setLoad(false)},1000)
    },[])
    const getDate=(date)=>{
        let date1=date?.toDate()?.toString()
        let newDate=moment(date1)?.format("Do MMM, YYYY")
        return newDate
      }
      const changeStatus=async (id, status)=>{
        if(window.confirm(`You are about to ${!status?"In-Active":"Active"} event?`)){
          setLoad(true)
        const taskDocRef = doc(db, 'event', id)
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
      <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      </div>
    </div>
    {/* Header End */}
    <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
       
       <div className={load==true?"d-none":"container my-5 table-responsive text-capitalize"}>
       <h1 className='text-center text-danger pb-3'>Manage Events</h1>
            <table className="table table-bordered table-hover">
                <thead className="text-dark">
                    
                    <tr>
                        <td>Sno</td>
                        <td>Banner</td>
                        <td>Event Title</td>
                        <td>Event Date-Time</td>
                        <td>Venue</td>
                        <td>Slots</td>
                        <td>Last Date for Reg.</td>
                        <td>Details</td>
                        <td>Sponsors</td>
                        <td>CreatedAt</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        // ? null check- 
                       data?.map((el,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <img src={el?.data?.image} style={{height:"100px",width:"100px"}}/>
                            </td>
                            <td>{el?.data?.eventtitle}</td>
                            <td>{el?.data?.eventdate}-{el?.data?.time}</td>
                            <td>{el?.data?.venue}</td>
                            <td>{el?.data?.availableSlots}/{el?.data?.noofslots}</td>
                            <td>{el?.data?.regDate}</td>
                            <td>{el?.data?.details}</td>
                            <td>{el?.data?.sponsors}</td>
                            <td>
                                {getDate(el?.data?.createdAt)}
                            </td>
                            <td style={{width:"220px"}}>
                                <Link className="btn btn-outline-info mx-1" to={"/admin/eventApplication/"+el.id}><i className="bi bi-eye"></i></Link>
                                <Link to={"/admin/editevent/"+el.id} className="btn-hover-bg btn btn-success text-light   px-2"><i className="bi bi-pencil-square"></i></Link>
                                {
                                    el.data.status?
                                    <button className="btn mx-2 btn-danger" onClick={()=>{changeStatus(el.id,false)}}>In-Active</button>
                                    :
                                    <button className="mx-2 btn btn-success" onClick={()=>{changeStatus(el.id,true)}}>Active</button>
                                }
                            </td>
                            
                        </tr>
                       )) 
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}