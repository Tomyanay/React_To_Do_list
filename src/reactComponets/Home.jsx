

import { listed_val } from './List_val'
import { useNavigate} from 'react-router-dom'
import { clsx } from 'clsx'
import { useState } from 'react'


function Home() {
  
  const Nav=useNavigate()
  const {listed}=listed_val()

  const [current_list,set_list]=useState(listed)


  function Edit_val(index,value){Nav('edit',{state:{value:value,index:index}})}

  function FindResult(e){
    e.preventDefault()
    const data=new FormData(e.target)
    if(data.get('search')===''){set_list(c=>listed)}
    else{
      set_list(c=>listed)
      set_list(c=>c.filter((value)=>{return value.title.toUpperCase().slice(0,data.get('search').length)===data.get('search').toUpperCase()}))}
  }

  return (
    <div className='Home'>
      <form className="Search" onSubmit={FindResult}>
        <label htmlFor="find">Search Items:</label>
        <input type="text" id='find' placeholder="Enter Post Title" autoComplete="off" name='search'/> 
      </form>

      <div className='listitems'>
      {current_list.map((value,index)=>< Item key={index} value={value} index={index} func={()=>{Edit_val(index,value)}} />)}
      </div>
    </div>
  )
}

function Item(props){


  const classes=clsx('itemContainer', props.value.isHighlight ? 'highlight' : null)
  
  return(
    <div className={classes} onDoubleClick={props.func}>
    <h1>{props.value.title}</h1>
    <p className='time'>Created on: {props.value.time}</p>
    <p className='value'>{props.value.val}</p>
    <hr/>
    </div>
  )

}

export default Home