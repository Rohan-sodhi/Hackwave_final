import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore"
import { useState, useEffect } from "react"
import { db } from "../../../Firebase"
import { ClipLoader } from "react-spinners"
import { Link } from "react-router-dom"
export default function ViewThemes() {
    const [load,setLoad]=useState(true)
    const [allTheme,setAllTheme]=useState([])
    useEffect(()=>{
      const que=query(collection(db,"theme")
      , where("status","==",true)
      ,orderBy("themeTitle","asc")
      )
      onSnapshot(que, doc=>{
          setAllTheme(
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
        <h2>Our Themes</h2>
        <p>
          Here are the themes, we are working on.
        </p>
      </div>
      <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
      <div className={load==true?"d-none":"container bg-light  text-capitalize"}>
        <div className="row gy-4 " data-aos="fade-up" data-aos-delay={100}>
          {allTheme?.length>0 ?
          allTheme?.map((el,index)=>(
          <div className="col-lg-4 text-center text-capitalize col-md-6" key={index}>
            <div className="service-item p-3 position-relative">
                <img src={el?.data?.image} className="w-100" style={{height:"200px"}}/>
                <Link to={"/problemStatement/"+el?.data?.themeTitle}>
                    <h2 className="my-2">{el?.data?.themeTitle}</h2>
                </Link>
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