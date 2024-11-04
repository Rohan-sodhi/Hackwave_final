import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import {  doc, getDoc, Timestamp, updateDoc} from "firebase/firestore"
import { db, storage } from "../../../Firebase"
import { toast } from "react-toastify"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { ClipLoader } from "react-spinners"
export default function EditTheme(){
    const [themeTitle,setThemeTitle]=useState("")
    const [file,setFile]=useState({})
    const [fileName,setFileName]=useState("")
    const [url,setUrl]=useState("")
    const [load,setLoad]=useState(true)
    const [previousImage,setPreviousImage]=useState("")
    const {id}=useParams()
    useEffect(()=>{
        getData()
    },[])
    const getData=async ()=>{
        let docRef=doc(db,"theme",id)
        let data=await getDoc(docRef)
        if(data.exists()){
            let finalData=data.data() 
            setThemeTitle(finalData.themeTitle)
            setPreviousImage(finalData.image)
          setTimeout(()=>{
            setLoad(false)
          },500)
        }else{
            toast.error("No data found")
            setTimeout(()=>{
                setLoad(false)
              },500)
        }
       }
       const nav=useNavigate()
    const saveData=async ()=>{
        //try catch
        try{
            let data={
                themeTitle:themeTitle,
            }
            if(!!url){
                data.image=url
            }
            const docRef=doc(db,"theme",id)
            await updateDoc(docRef,data)
            toast.success("Theme updated successfully")
            setTimeout(()=>{
                nav("/admin/manageTheme")
            },500)
        }
        catch(err){
            toast.error("something went wrong!!")
            setTimeout(()=>{
                setLoad(false)
            },500)
        }
    }
    const handleForm=(e)=>{
        e.preventDefault()
        setLoad(true)
        if(!!fileName){
        const storageRef = ref(storage, 'theme_images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
        (snapshot) => {
            console.log(snapshot);
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }, 
        (error) => {
            toast.error("something went wrong", error.code)
            
        }, 
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            //***store in state so that we can use it later
            setUrl(downloadURL)
            });
        }
    );
}
else{
    saveData()
}
}
       useEffect(()=>{
        if(!!url){
            saveData()
        }
       },[url])
    return(
        <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Theme</h2>
            <p>
              
            </p>
          </div>
          <div className="container-fluid  ">
            <ClipLoader cssOverride={{display:"block",margin:"10vh auto"}} loading={load}/>
          
            <div className={load==true?"d-none":"container  text-capitalize"}>
              <div className="row justify-content-center">
                <div className="col-xl-6 bg-light">
                <div className="form p-5">
                  <h1 className='text-center text-danger pb-3'>Edit Theme</h1>
                  <img src={previousImage} style={{height:"150px", width:"150px", display:"block", margin:"0 auto"}}/>
                    <form onSubmit={handleForm}>
                        <div className="row gx-4 gy-3">
                            <label>Theme Title</label>
                            <div className="col-xl col-md">
                            <input
                                type="text"
                                className="form-control bg-white border-0 py-3 px-4"
                                placeholder="Title" value={themeTitle} onChange={(e)=>{setThemeTitle(e.target.value)}}
                            />
                            </div>
                        </div>
                        <div className="row gx-4 gy-3 pt-3">
                          <label>Logo</label>
                          <div className="col-xl-12">
                          <input
                              type="file"
                              className="form-control bg-white border-0 py-3 px-4"
                              placeholder="Category name" value={fileName} onChange={(e)=>{setFileName(e.target.value); setFile(e.target.files[0])}}
                          />
                          </div>
                        </div>
                        <div className="col-12 my-3">
                          <button
                            className="btn-hover-bg btn btn-danger text-light w-100 py-3 px-5"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                    </form>

              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}