import React, { useRef } from 'react';
import '../Dashboard/App.css';
import { useState } from 'react';
import axios from "axios";



function Upload() {
  const toast = useRef(null);
  const [file,setFile] = useState(null);
  const [progress,setProgress] = useState({started:false,pc:0});
  const [msg,setMsg] = useState(null);


  function handleUpload(){
    if(!file){
      console.log("no file selected");
      setMsg("no file selected");
      return;
    }
    const fd = new FormData();
    fd.append('file',file);

    setMsg("uploading yay");
    setProgress(prevState=> {
       return{...prevState, started:true}
    })
    axios.post('http://httpbin.org/post',fd,{
      onUploadProgress:(progressEvent) =>{  setProgress(prevState=>{
        return {...prevState,pc: progressEvent.progress*100}
      })   },
      onUploadProgress:(progressEvent) =>{  console.log(progressEvent.progress*100)   },
      headers : {
        "Custom-Header":"value",
      }
    })
    .then(res=> {
      setMsg("uploaded successfully yayyy");
      console.log(res.data);
    })
    .catch(err=>{
      setMsg("upload failed :(");
      console.error(err);
  });
  }



  {/*const onUpload = () => {
      toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };*/}
  return (
    <div className='h-[100vh] bg-[#f4f4f4] flex flex-col justify-center items-center'>
      <h1>Fileit</h1>
      <div className='bg-white p-4 w-[40%] rounded-2xl shadow-[0px_13px_33px_1px_rgba(255,_255,_255,_0.2)] flex flex-col justify-center items-center'>
        
        <label className='flex flex-row items-center justify-around my-2'>
            
            <input type='text' size='20' placeholder='To,Username' className='border-2 rounded-3xl px-3 py-2'></input>
        </label>

        <label className='flex flex-row items-center justify-around my-2'>
            <input type='text' size='20' placeholder='wallet address' className='border-2 rounded-3xl  px-3 py-2'></input>
        </label>

        {/*<label className='flex flex-col items-center my-3'>
          {/*<input type='file' placeholder='Choose file' className='bg-blue-500 p-2 ' id='file-input'></input>
          {/*<label for='file-input'>Choose File</label>
        </label>
         
        {/*<button className='bg-black px-4 py-2 rounded-2xl w-[150px] text-white'>Choose file</button>*/}
        <input onChange={(e) => {e.target.file}}type="file"                                                                                                                                              />
        <button onClick={handleUpload}className='bg-black px-4 py-2 rounded-2xl w-[150px] text-white'>upload file</button>
     
       
        {progress.started && <progress max="100" value={progress.pc}></progress> }
        {msg && <span>{msg}</span>}
      </div>
    </div>
  )
}

export default Upload
