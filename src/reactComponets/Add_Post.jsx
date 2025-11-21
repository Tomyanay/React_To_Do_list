
import { useState,useEffect} from 'react'
import { listed_val } from './List_val'

function Add_Post() {

  const {add_Item}=listed_val()
  const [add,isadded]=useState(false)
  const [Error,setError]=useState(false)

  function EnterValue(e){
    e.preventDefault()
    const data=new FormData(e.target)
    if(data.get('text')!=='' && data.get('Info')!==''){
      add_Item(data.get('text'),data.get('Info'))
      isadded(a=>true)
      setError(e=>false)
      e.target.reset()}

    else{setError(e=>true)}}

    useEffect(()=>{
    if(add){
      const pp=setTimeout(()=>{
        isadded(a=>!a)
        clearTimeout(pp)
      },900)}
  },[add])


  return (
    <div className='Add_Post'>
       <h2>Add a new post!!</h2>
        <form onSubmit={EnterValue}  className='add_form'>
          <div className='tag tag1'>
          <label htmlFor="title">title:</label>
          <input type="text" id='title' placeholder='Enter Task Title' 
           autoComplete='off' name='text' maxLength={25} onKeyDown={(e)=>{if(e.key==='Enter'){e.preventDefault()}}} />
          </div>

          <div className='tag tag2'>
          <label htmlFor="Task">Task:</label>
          <textarea placeholder='Enter Task' id='Task' name='Info' />
          </div>

          <div className='bSubmit'>
          <button className='Submit' type='submit' >Submit</button>
          </div>

          {add &&(<p>Item was added succesfully!!</p>)}
          {Error &&(<p>You must fill all text fields </p>)}

        </form>
        
    </div>
  )
}
export default Add_Post