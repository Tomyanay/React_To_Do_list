
import { NavLink,Outlet } from "react-router-dom"
import { useState,useEffect,useRef} from "react"

function Layout() {

    const [animation,setanime]=useState('')
    const checkIndex=useRef(0)
    const Title='React to Do list'.split('')

    useEffect(() => {
    const timer = setInterval(() => {
      if (checkIndex.current <= Title.length) {   
        const Slice=Title.slice(0,checkIndex.current)
        setanime(s => Slice);
        checkIndex.current += 1;} 

      else {clearInterval(timer)}
    }, 350)

    return () => clearInterval(timer); 
  }, []); 


  return (
    <div className="box">
        <div className="title">
          <h1>{animation}</h1>
          <img src="./react.svg" alt="reactImg"/>
        </div>

        <nav>
         <NavLink className={'mainlink'} to={'/'}><p>Home</p></NavLink>
         <NavLink className={'mainlink'} to={'add'}><p>Add New Post</p></NavLink>
         <NavLink className={'mainlink'} to={'about'}><p>About</p></NavLink>
        </nav>
         
        <Outlet/>
        
        <footer>
            <p>&copy;Tom yanay {new Date().getFullYear()}</p>
        </footer>
    </div>  
  )
}

export default Layout