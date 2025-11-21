

import { useLocation,useNavigate } from 'react-router-dom'
import { listed_val } from './List_val'
import { useEffect,useState } from 'react'

function Edit() {

    const values=useLocation()
    const nav = useNavigate()

    const {remove_item,Highlight_item,Apply_item}=listed_val()

    if(!values.state){nav('/')}

    const {value,index}=values.state
    const [list_v,set_v]=useState(value)

    const [add,isadded]=useState(false)
    const [Error,setError]=useState(false)
    

    useEffect(()=>{
    if(add){
      const pp=setTimeout(()=>{
        isadded(a=>!a)
        clearTimeout(pp)
    },900)}
  },[add])

  
    function Apply_Change(){
     if(list_v.title!=='' && list_v.val!==''){
      Apply_item(list_v.id,list_v.title,list_v.val) 
      setError(e=>false)
      isadded(a=>true)}

     else{setError(e=>true)}}


  return (
    <div className='Edit'>
         <h2>Edit task {index+1}</h2>
          <div  className='add_form'>
          <div className='tag tag1'>
          <label htmlFor="title">title:</label>
          <input type="text" id='title' placeholder='Enter Task Title' value={list_v.title} onChange={(e)=>{set_v(v=>({...v,title:e.target.value}))}}
           autoComplete='off'  maxLength={25} />
          </div>

          <div className='tag tag2'>
          <label htmlFor="Task">Task:</label>
          <textarea placeholder='Enter Task' id='Task' value={list_v.val} onChange={(e)=>{set_v(v=>({...v,val:e.target.value}))}} />
          </div>

          <div className='Apply'>
          <button onClick={Apply_Change} className='Apl' type='submit' >Apply</button>
          <button onClick={()=>{remove_item(list_v.id);nav('/')}} className='Del'>Delete task</button>
          <button onClick={()=>{Highlight_item(list_v.id);isadded(a=>true)}} className='High'>Highlight Task</button>
          </div>

          {Error &&(<p>You must fill all text fields</p>)}
          {add &&(<p>Action Done succesfully!</p>)}

        </div>
    </div>
  )
}

export default Edit