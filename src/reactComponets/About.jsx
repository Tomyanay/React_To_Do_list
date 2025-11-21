

import { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import { HexColorPicker } from 'react-colorful'
import namer from 'color-namer';
import { Color } from './LoadColor';

function About() {

  const [Bgcolor,setColor]=useState(namer(Color()).html[0].name)
  const HexColor=useRef(Color())

  function SetBodyColor(e){
      HexColor.current=e
      setColor(BG=>namer(e).html[0].name)}


  function Changeit(){
    document.documentElement.style.setProperty('--body_bg',HexColor.current)
    localStorage.setItem('color',JSON.stringify(HexColor.current))}

  function Reset(){
    HexColor.current='#b8abab'
    document.documentElement.style.setProperty('--body_bg',HexColor.current)
    setColor(BG=>namer('#b8abab').html[0].name)
    localStorage.setItem('color',JSON.stringify(HexColor.current))}

  return (

    <div className='About'>
      <h1>About site</h1>
      <p>Welcome to the to do list website in order to see your
        current Tasks please press the  <Link to={'/'}>HOME</Link> link. 
        if you want to add a post press the <Link to={'/add'}>ADD NEW POST</Link> link.
        you can also edit your items if you double click the item you want to change 
      </p>
      <p>You can also Search for items that you want. in order to do that
       that you will need to Enter the name of the title you wish to find and press enter. In order to cancel the search  empty the search bar and press enter</p>


      <div className='Style'>
        <p style={{textDecoration:'underline'}}>Change Background color</p>
        <div className='Picker'>
        <HexColorPicker  color={HexColor.current} onChange={(e)=>{SetBodyColor(e)}}/>
        </div>
        <p>Current color: {Bgcolor}</p>

        <div className='Change_Buttons'>
          <button onClick={Changeit}>Apply Change</button>
          <button onClick={Reset}>Reset</button>
        </div>

      </div>
    </div>)}

export default About