import { collection, onSnapshot, query, updateDoc, doc, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"
import moment from "moment"
import { Link } from "react-router-dom"
export default function ManageProblem(){
    const [data,setData]=useState([])
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        //on load data fetch 
        const que=query(collection(db,"problem")
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
        setTimeout(()=>{setLoad(false)},500)
    },[])
    const getDate=(date)=>{
        let date1=date?.toDate()?.toString()
        let newDate=moment(date1)?.format("Do MMM, YYYY")
        return newDate
      }
      const changeStatus=async (id, status)=>{
        if(window.confirm(`You are about to ${status?"Active":"In-Active"} problem statement?`)){
          setLoad(true)
        const taskDocRef = doc(db, 'problem', id)
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
          {/* Header Start */}
     <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      </div>
    </div>
    {/* Header End */}
    <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
       
       <div className={load==true?"d-none":"container my-5 text-capitalize table-repsonsive"}>
       <h1 className='text-center text-danger pb-3'>Manage Problem Statement</h1>
            <table className="table table-bordered table-hover">
                <thead>
                    
                    <tr>
                        <td>Sno</td>
                        <td>Problem Statement</td>
                        <td>Theme</td>
                        <td>Expert</td>
                        <td>Technology</td>
                        <td>Description</td>
                        <td>Department</td>
                        <td>Status</td>
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
                            <td>{el?.data?.title}</td>
                            <td>{el?.data?.themeTitle}</td>
                            <td>Ms./Mr.{el?.data?.experts},<br/>{el?.data?.designation}</td>
                            <td>{el?.data?.technology}</td>
                            <td>{el?.data?.description}</td>
                            <td>{el?.data?.departmentName}</td>
                            <td>{el?.data?.status?"Active":"In-active"}</td>
                            <td>
                                {getDate(el?.data?.createdAt)}
                            </td>
                            <td style={{width:"200px"}}>
                                <Link to={"/admin/editproblem/"+el.id} className="btn-hover-bg btn btn-success text-light   px-2"><i className="bi bi-pencil-square"></i></Link>
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